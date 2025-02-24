### Roster Details<br />
Team Name: los kogutos<br />
Roster: kRaSnaL, maaryy, mASKED, Melavi, tein<br />
Global Rank: [265](../../standings_global_2025_02_24.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_24.md)<br />
Regional Rank: [151]( ../../standings_europe_2025_02_24.md)<br />
<br />
Final Rank Value:  502.7<br />
<br />
Final Rank Value (502.7) = Starting Rank Value (490.7) + Head To Head Adjustments (12.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.187[<sup>2</sup>](#table1)
- Opponent Network: 0.004[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.048<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 490.7
- 400 + ( ( 0.048 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 490.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent         | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |      652 | 2025-01-08 | EYEBALLERS       | L   | 0.885      | -            | -                | -                | -         |    -5.87 | kRaSnaL, maaryy, mASKED, Melavi, tein |
|            4 |      655 | 2025-01-07 | Insilio          | L   | 0.879      | -            | -                | -                | -         |    -8.13 | kRaSnaL, maaryy, mASKED, Melavi, tein |
|            3 |      663 | 2025-01-05 | BadGuys          | W   | 0.864      | 0.143        | 0.000 (0.000)    | 0.153 (0.019)    | 0 (0.000) |    14.46 | kRaSnaL, maaryy, mASKED, Melavi, tein |
|            2 |      670 | 2025-01-03 | FLuffy Gangsters | L   | 0.853      | -            | -                | -                | -         |    -7.12 | maaryy, mASKED, Melavi, tein, tomiko  |
|            1 |      690 | 2024-12-27 | Heimo            | W   | 0.804      | 0.143        | 0.004 (0.000)    | 0.155 (0.018)    | 0 (0.000) |    18.63 | kRaSnaL, maaryy, mASKED, mhL, tomiko  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($371,464.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
