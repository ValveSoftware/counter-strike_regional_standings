### Roster Details<br />
Team Name: Heimo<br />
Roster: arvid, japE, oopee, spargo, Welho<br />
Global Rank: [194](../../standings_global_2024_10_09.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_10_09.md)<br />
Regional Rank: [123]( ../../standings_europe_2024_10_09.md)<br />
<br />
Final Rank Value:  613.4<br />
<br />
Final Rank Value (613.4) = Starting Rank Value (647.9) + Head To Head Adjustments (-34.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.289[<sup>1</sup>](#table2)
- Bounty Collected: 0.215[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.128<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 647.9
- 400 + ( ( 0.128 - 0.000 ) / ( 0.828 - 0.000 ) ) * 1600 = 647.9


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |       79 | 2024-10-06 | JANO         | L   | 1.000      | -            | -                | -                | -         |   -14.19 | arvid, japE, oopee, spargo, Welho  |
|           18 |       95 | 2024-10-06 | cspojat      | W   | 1.000      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     6.70 | arvid, japE, oopee, spargo, Welho  |
|           17 |      101 | 2024-10-06 | NAVI Junior  | L   | 1.000      | -            | -                | -                | -         |    -4.25 | arvid, japE, oopee, spargo, Welho  |
|           16 |      115 | 2024-10-05 | ENCE Academy | L   | 1.000      | -            | -                | -                | -         |   -11.18 | arvid, japE, oopee, spargo, Welho  |
|           15 |      131 | 2024-10-05 | Preasy       | W   | 1.000      | 0.333        | 0.004 (0.001)    | 0.128 (0.043)    | 0 (0.000) |    15.90 | arvid, japE, oopee, spargo, Welho  |
|           14 |      206 | 2024-10-03 | Anonymo      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.087 (0.029)    | 0 (0.000) |    13.82 | arvid, japE, oopee, Welho, ykis    |
|           13 |      286 | 2024-10-01 | L&G          | L   | 1.000      | -            | -                | -                | -         |    -8.90 | arvid, japE, oopee, Welho, ykis    |
|           12 |     2317 | 2024-08-01 | JANO         | L   | 0.741      | -            | -                | -                | -         |   -11.62 | arvid, japE, oopee, Welho, ykis    |
|           11 |     2698 | 2024-07-21 | INFINITE     | L   | 0.666      | -            | -                | -                | -         |   -12.84 | arvid, japE, oopee, Welho, ykis    |
|           10 |     2737 | 2024-07-20 | 777          | W   | 0.660      | 0.143        | 0.005 (0.000)    | 0.056 (0.005)    | 0 (0.000) |    10.45 | arvid, japE, oopee, Welho, ykis    |
|            9 |     2760 | 2024-07-19 | CPH Wolves   | L   | 0.654      | -            | -                | -                | -         |    -3.46 | arvid, japE, oopee, Welho, ykis    |
|            8 |     3172 | 2024-06-24 | lajtbitexe   | L   | 0.487      | -            | -                | -                | -         |    -5.14 | arvid, oopee, Sm1llee, Welho, ykis |
|            7 |     3178 | 2024-06-23 | Revenant     | L   | 0.478      | -            | -                | -                | -         |    -2.98 | arvid, oopee, Sm1llee, Welho, ykis |
|            6 |     3784 | 2024-06-02 | HAVU         | L   | 0.339      | -            | -                | -                | -         |    -6.82 | arvid, japE, oopee, Welho, ykis    |
|            5 |     4367 | 2024-05-14 | NOM          | L   | 0.212      | -            | -                | -                | -         |    -4.42 | arvid, japE, oopee, Welho, ykis    |
|            4 |     4384 | 2024-05-13 | DMS          | L   | 0.206      | -            | -                | -                | -         |    -1.68 | arvid, japE, oopee, Welho, ykis    |
|            3 |     4551 | 2024-05-05 | ENCE Academy | W   | 0.154      | 0.306        | 0.009 (0.000)    | 0.272 (0.013)    | 0 (0.000) |     3.16 | arvid, japE, oopee, Welho, ykis    |
|            2 |     4570 | 2024-05-04 | jefet        | W   | 0.147      | 0.306        | 0.000 (0.000)    | 0.004 (0.000)    | 0 (0.000) |     1.44 | arvid, japE, oopee, Welho, ykis    |
|            1 |     4704 | 2024-04-28 | ENCE Academy | W   | 0.106      | 0.306        | 0.001 (0.000)    | 0.003 (0.000)    | 0 (0.000) |     1.57 | arvid, japE, oopee, Welho, ykis    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,047.32)
- Divide that value by the 5th highest value among all rosters ($304,769.86)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-06 |      1.000 | $553.00        | $553.00         |
| 2024-05-05 |      0.154 | $3,215.00      | $494.32         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
