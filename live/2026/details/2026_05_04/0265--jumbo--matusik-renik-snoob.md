### Roster Details<br />
Team Name: JUMBO<br />
Roster: matusik, reNIK, Snoob<br />
Global Rank: [265](../../standings_global_2026_05_04.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_05_04.md)<br />
Regional Rank: [167]( ../../standings_europe_2026_05_04.md)<br />
<br />
Final Rank Value:  623.3<br />
<br />
Final Rank Value (623.3) = Starting Rank Value (593.5) + Head To Head Adjustments (29.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.242[<sup>2</sup>](#table1)
- Opponent Network: 0.017[<sup>2</sup>](#table1)
- LAN Wins: 0.159[<sup>2</sup>](#table1)

The average of these factors is 0.104<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 593.5
- 400 + ( ( 0.104 - 0.000 ) / ( 0.862 - 0.000 ) ) * 1600 = 593.5


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
|            6 |     1111 | 2026-04-02 | 1win     | L   | 0.986      | -            | -                | -                | -         |    -0.79 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            5 |     1126 | 2026-04-02 | NOVAQ    | W   | 0.984      | 0.435        | 0.017 (0.007)    | 0.387 (0.166)    | 1 (0.984) |    27.37 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            4 |     1127 | 2026-04-02 | 1win     | L   | 0.984      | -            | -                | -                | -         |    -0.65 | kinyx, matusik, reNIK, Snoob, str0ngl |
|            3 |     4089 | 2026-02-01 | BET-M    | L   | 0.588      | -            | -                | -                | -         |    -0.43 | DeDe, matusik, Proper, reNIK, Snoob   |
|            2 |     4095 | 2026-02-01 | Gluck    | W   | 0.587      | 0.333        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.587) |     4.63 | DeDe, matusik, Proper, reNIK, Snoob   |
|            1 |     4111 | 2026-02-01 | BET-M    | L   | 0.586      | -            | -                | -                | -         |    -0.40 | DeDe, matusik, Proper, reNIK, Snoob   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($468,528.41)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
