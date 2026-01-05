### Roster Details<br />
Team Name: MASONIC<br />
Roster: Avou, Botman, Bukhavez, KralleJ, Noruyp<br />
Global Rank: [165](../../standings_global_2026_01_05.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2026_01_05.md)<br />
Regional Rank: [113]( ../../standings_europe_2026_01_05.md)<br />
<br />
Final Rank Value:  756.5<br />
<br />
Final Rank Value (756.5) = Starting Rank Value (704.5) + Head To Head Adjustments (52.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.070[<sup>2</sup>](#table1)
- LAN Wins: 0.256[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 704.5
- 400 + ( ( 0.154 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 704.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           11 |     1113 | 2025-11-07 | Metizport     | L   | 0.808      | -            | -                | -                | -         |    -4.52 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|           10 |     1136 | 2025-11-07 | FUT Academy   | W   | 0.807      | 0.335        | 0.001 (0.000)    | 0.033 (0.009)    | 1 (0.807) |     6.57 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            9 |     1149 | 2025-11-07 | EYEBALLERS    | W   | 0.806      | 0.335        | 0.103 (0.028)    | 1.000 (0.270)    | 1 (0.806) |    24.38 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            8 |     1165 | 2025-11-07 | ENCE          | L   | 0.806      | -            | -                | -                | -         |    -0.72 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            7 |     1178 | 2025-11-07 | Falcons Force | L   | 0.806      | -            | -                | -                | -         |   -21.22 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            6 |     1197 | 2025-11-07 | MOUZ NXT      | W   | 0.805      | 0.335        | 0.011 (0.003)    | 0.832 (0.225)    | 1 (0.805) |    23.89 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            5 |     1277 | 2025-11-04 | FORZE Reload  | L   | 0.787      | -            | -                | -                | -         |    -6.76 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            4 |     1350 | 2025-11-01 | Alliance      | L   | 0.768      | -            | -                | -                | -         |    -1.09 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            3 |     1425 | 2025-10-29 | ENCE Academy  | W   | 0.747      | 0.384        | 0.005 (0.002)    | 0.427 (0.123)    | 0 (0.000) |    15.75 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            2 |     1496 | 2025-10-27 | ALGO          | W   | 0.734      | 0.384        | 0.005 (0.001)    | 0.245 (0.069)    | 0 (0.000) |    16.74 | Avou, Botman, Bukhavez, KralleJ, Noruyp |
|            1 |     1608 | 2025-10-25 | GUN5          | L   | 0.720      | -            | -                | -                | -         |    -1.00 | Avou, Botman, Bukhavez, KralleJ, Noruyp |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($428,700.42)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
