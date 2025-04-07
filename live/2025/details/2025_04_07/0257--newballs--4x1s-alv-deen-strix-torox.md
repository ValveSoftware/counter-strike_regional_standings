### Roster Details<br />
Team Name: NewBALLS<br />
Roster: 4X1s, Alv, deeN, strix, torox<br />
Global Rank: [257](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [145]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  488.7<br />
<br />
Final Rank Value (488.7) = Starting Rank Value (486.9) + Head To Head Adjustments (1.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 486.9
- 400 + ( ( 0.047 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 486.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     2732 | 2024-11-03 | 9INE     | L   | 0.166      | -            | -                | -                | -         |    -1.58 | 4X1s, Alv, deeN, strix, torox |
|            4 |     2783 | 2024-11-01 | ARCRED   | W   | 0.152      | 0.384        | 0.008 (0.000)    | 0.224 (0.013)    | 0 (0.000) |     3.54 | 4X1s, Alv, deeN, strix, torox |
|            3 |     2939 | 2024-10-24 | Endpoint | L   | 0.099      | -            | -                | -                | -         |    -0.78 | 4X1s, Alv, deeN, strix, torox |
|            2 |     3050 | 2024-10-18 | Apogee   | W   | 0.059      | 0.384        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.71 | 4X1s, Alv, deeN, strix, torox |
|            1 |     3163 | 2024-10-12 | 9 Pandas | L   | 0.020      | -            | -                | -                | -         |    -0.03 | 4X1s, Alv, deeN, strix, torox |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
