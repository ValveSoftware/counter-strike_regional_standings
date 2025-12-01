### Roster Details<br />
Team Name: AaB<br />
Roster: Boye, Patti, Viggo<br />
Global Rank: [268](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [152]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  486.9<br />
<br />
Final Rank Value (486.9) = Starting Rank Value (481.5) + Head To Head Adjustments (5.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.169[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.043<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 481.5
- 400 + ( ( 0.043 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 481.5


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
|            5 |     4203 | 2025-07-09 | NOVAQ      | L   | 0.232      | -            | -                | -                | -         |    -0.55 | bekker, Boye, Patti, Tubsy, Viggo |
|            4 |     4224 | 2025-07-07 | KHAN       | L   | 0.220      | -            | -                | -                | -         |    -1.11 | bekker, Boye, Patti, Tubsy, Viggo |
|            3 |     4240 | 2025-07-05 | EYEBALLERS | L   | 0.205      | -            | -                | -                | -         |    -0.03 | Boye, Griller, Patti, SinK, Viggo |
|            2 |     4251 | 2025-07-03 | ROSY       | W   | 0.192      | 0.486        | 0.001 (0.000)    | 0.007 (0.001)    | 0 (0.000) |     3.35 | Boye, Griller, Patti, SinK, Viggo |
|            1 |     4259 | 2025-07-02 | The Glecs  | W   | 0.185      | 0.486        | 0.000 (0.000)    | 0.204 (0.018)    | 0 (0.000) |     3.80 | Boye, Griller, Patti, SinK, Viggo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
