### Roster Details<br />
Team Name: Mercenaires<br />
Roster: afro, Djoko, misutaaa, NBK-, PerX<br />
Global Rank: [236](../../standings_global_2025_06_02.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_06_02.md)<br />
Regional Rank: [126]( ../../standings_europe_2025_06_02.md)<br />
<br />
Final Rank Value:  532.1<br />
<br />
Final Rank Value (532.1) = Starting Rank Value (509.5) + Head To Head Adjustments (22.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.060<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.5
- 400 + ( ( 0.060 - 0.000 ) / ( 0.872 - 0.000 ) ) * 1600 = 509.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent   | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     1519 | 2025-03-28 | NOVAQ      | L   | 0.763      | -            | -                | -                | -         |    -7.74 | afro, Djoko, misutaaa, NBK-, PerX |
|            5 |     1592 | 2025-03-27 | Partizan   | L   | 0.756      | -            | -                | -                | -         |    -2.77 | afro, Djoko, misutaaa, NBK-, PerX |
|            4 |     1926 | 2025-03-15 | AMKAL      | L   | 0.679      | -            | -                | -                | -         |    -6.15 | afro, Djoko, misutaaa, NBK-, PerX |
|            3 |     1927 | 2025-03-15 | TNL        | W   | 0.679      | 0.143        | 0.042 (0.004)    | 1.000 (0.097)    | 0 (0.000) |    20.21 | afro, Djoko, misutaaa, NBK-, PerX |
|            2 |     1933 | 2025-03-15 | GhoulsW    | W   | 0.678      | 0.143        | 0.000 (0.000)    | 0.089 (0.009)    | 0 (0.000) |     9.85 | afro, Djoko, misutaaa, NBK-, PerX |
|            1 |     1947 | 2025-03-15 | Lazer Cats | W   | 0.677      | 0.143        | 0.000 (0.000)    | 0.055 (0.005)    | 0 (0.000) |     9.21 | afro, Djoko, misutaaa, NBK-, PerX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($444,744.78)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
