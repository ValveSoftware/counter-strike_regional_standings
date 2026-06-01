### Roster Details<br />
Team Name: JUMBO<br />
Roster: matusik, reNIK, Snoob<br />
Global Rank: [280](../../standings_global_2026_06_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_06_01.md)<br />
Regional Rank: [178]( ../../standings_europe_2026_06_01.md)<br />
<br />
Final Rank Value:  592.3<br />
<br />
Final Rank Value (592.3) = Starting Rank Value (568.4) + Head To Head Adjustments (23.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.222[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.123[<sup>2</sup>](#table1)

The average of these factors is 0.088<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 568.4
- 400 + ( ( 0.088 - 0.000 ) / ( 0.840 - 0.000 ) ) * 1600 = 568.4


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2097 | 2026-04-02 | 1win     | L   | 0.799      | -            | -                | -                | -         |    -0.58 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            5 |     2112 | 2026-04-02 | NOVAQ    | W   | 0.798      | 0.435        | 0.009 (0.003)    | 0.264 (0.091)    | 1 (0.798) |    21.98 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            4 |     2113 | 2026-04-02 | 1win     | L   | 0.798      | -            | -                | -                | -         |    -0.49 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            3 |     5075 | 2026-02-01 | BET-M    | L   | 0.402      | -            | -                | -                | -         |    -0.26 | DeDe, matusik, Proper, reNIK, Snoob   |
|            2 |     5081 | 2026-02-01 | Gluck    | W   | 0.401      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.401) |     3.52 | DeDe, matusik, Proper, reNIK, Snoob   |
|            1 |     5097 | 2026-02-01 | BET-M    | L   | 0.399      | -            | -                | -                | -         |    -0.25 | DeDe, matusik, Proper, reNIK, Snoob   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($624,406.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
