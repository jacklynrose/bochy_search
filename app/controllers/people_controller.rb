class PeopleController < ApplicationController
  def index
    render json: Person.all
  end

  def create
    @person = Person.create(person_params)
    render json: @person
  end

  def update
    @person = Person.find(params[:id])
    @person.update(person_params)
    render json: @person
  end

  def destroy
    @person = Person.find(params[:id])
    @person.destroy
    render json: { status: "OK" }
  end

  private

  def person_params
    params.require(:person).permit(:first_name, :last_name)
  end
end
