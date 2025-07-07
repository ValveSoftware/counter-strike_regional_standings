### Roster Details<br />
Team Name: Mercenaires<br />
Roster: afro, Djoko, misutaaa, NBK-, PerX<br />
Global Rank: [227](../../standings_global_2025_07_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_07_07.md)<br />
Regional Rank: [120]( ../../standings_europe_2025_07_07.md)<br />
<br />
Final Rank Value:  527.6<br />
<br />
Final Rank Value (527.6) = Starting Rank Value (515.9) + Head To Head Adjustments (11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.241[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.062<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 515.9
- 400 + ( ( 0.062 - 0.000 ) / ( 0.858 - 0.000 ) ) * 1600 = 515.9


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
|            6 |     1995 | 2025-03-28 | NOVAQ      | L   | 0.525      | -            | -                | -                | -         |    -7.45 | afro, Djoko, misutaaa, NBK-, PerX |
|            5 |     2068 | 2025-03-27 | Partizan   | L   | 0.518      | -            | -                | -                | -         |    -1.72 | afro, Djoko, misutaaa, NBK-, PerX |
|            4 |     2402 | 2025-03-15 | AMKAL      | L   | 0.441      | -            | -                | -                | -         |    -3.64 | afro, Djoko, misutaaa, NBK-, PerX |
|            3 |     2403 | 2025-03-15 | TNL        | W   | 0.441      | 0.143        | 0.115 (0.007)    | 1.000 (0.063)    | 0 (0.000) |    13.54 | afro, Djoko, misutaaa, NBK-, PerX |
|            2 |     2409 | 2025-03-15 | GhoulsW    | W   | 0.440      | 0.143        | 0.000 (0.000)    | 0.064 (0.004)    | 0 (0.000) |     6.24 | afro, Djoko, misutaaa, NBK-, PerX |
|            1 |     2423 | 2025-03-15 | Lazer Cats | W   | 0.439      | 0.143        | 0.000 (0.000)    | 0.038 (0.002)    | 0 (0.000) |     4.73 | afro, Djoko, misutaaa, NBK-, PerX |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($499,535.85)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
