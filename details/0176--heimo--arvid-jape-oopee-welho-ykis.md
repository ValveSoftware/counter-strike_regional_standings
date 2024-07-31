### Roster Details<br />
Team Name: Heimo<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Global Rank: [176](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [113]( ../standings_europe.md)<br />
<br />
Final Rank Value:  646.3<br />
<br />
Final Rank Value (646.3) = Starting Rank Value (682.6) + Head To Head Adjustments (-36.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.311[<sup>1</sup>](#table2)
- Bounty Collected: 0.228[<sup>2</sup>](#table1)
- Opponent Network: 0.009[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.137<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 682.6
- 400 + ( ( 0.137 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 682.6


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
|           12 |      341 | 2024-07-21 | INFINITE     | L   | 1.000      | -            | -                | -                | -         |   -18.02 | arvid, japE, oopee, Welho, ykis    |
|           11 |      380 | 2024-07-20 | 777          | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.183 (0.026)    | 0 (0.000) |    16.89 | arvid, japE, oopee, Welho, ykis    |
|           10 |      403 | 2024-07-19 | CPH Wolves   | L   | 1.000      | -            | -                | -                | -         |    -7.64 | arvid, japE, oopee, Welho, ykis    |
|            9 |      815 | 2024-06-24 | lajtbitexe   | L   | 0.952      | -            | -                | -                | -         |   -13.04 | arvid, oopee, Sm1llee, Welho, ykis |
|            8 |      821 | 2024-06-23 | Revenant     | L   | 0.944      | -            | -                | -                | -         |    -9.19 | arvid, oopee, Sm1llee, Welho, ykis |
|            7 |     1427 | 2024-06-02 | HAVU         | L   | 0.804      | -            | -                | -                | -         |   -11.79 | arvid, japE, oopee, Welho, ykis    |
|            6 |     2010 | 2024-05-14 | NOM          | L   | 0.677      | -            | -                | -                | -         |   -14.93 | arvid, japE, oopee, Welho, ykis    |
|            5 |     2027 | 2024-05-13 | DMS          | L   | 0.672      | -            | -                | -                | -         |    -5.17 | arvid, japE, oopee, Welho, ykis    |
|            4 |     2194 | 2024-05-05 | ENCE Academy | W   | 0.619      | 0.306        | 0.005 (0.001)    | 0.156 (0.030)    | 0 (0.000) |    10.63 | arvid, japE, oopee, Welho, ykis    |
|            3 |     2213 | 2024-05-04 | jefet        | W   | 0.612      | 0.306        | 0.001 (0.000)    | 0.022 (0.004)    | 0 (0.000) |     5.60 | arvid, japE, oopee, Welho, ykis    |
|            2 |     2347 | 2024-04-28 | ENCE Academy | W   | 0.571      | 0.306        | 0.005 (0.001)    | 0.156 (0.027)    | 0 (0.000) |    10.50 | arvid, japE, oopee, Welho, ykis    |
|            1 |     4280 | 2024-02-03 | TMVG         | L   | 0.007      | -            | -                | -                | -         |    -0.16 | arvid, japE, oopee, ottob, Tumppis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,990.49)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
