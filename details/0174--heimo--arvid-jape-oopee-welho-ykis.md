### Roster Details<br />
Team Name: Heimo<br />
Roster: arvid, japE, oopee, Welho, ykis<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [174](../standings_global.md)<br />
Regional Rank: [110]( ../standings_europe.md)<br />
Final Rank Value:  647.8<br />
<br />
Final Rank Value (647.8) = Starting Rank Value (687.3) + Head To Head Adjustments (-39.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.321[<sup>1</sup>](#table2)
- Bounty Collected: 0.235[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.142<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.3
- 400 + ( ( 0.142 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 687.3


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
|           12 |       99 | 2024-07-21 | INFINITE     | L   | 1.000      | -            | -                | -                | -         |   -18.16 | arvid, japE, oopee, Welho, ykis    |
|           11 |      138 | 2024-07-20 | 777          | W   | 1.000      | 0.143        | 0.020 (0.003)    | 0.208 (0.030)    | 0 (0.000) |    17.03 | arvid, japE, oopee, Welho, ykis    |
|           10 |      161 | 2024-07-19 | CPH Wolves   | L   | 1.000      | -            | -                | -                | -         |    -7.67 | arvid, japE, oopee, Welho, ykis    |
|            9 |      573 | 2024-06-24 | lajtbitexe   | L   | 0.999      | -            | -                | -                | -         |   -13.63 | arvid, oopee, Sm1llee, Welho, ykis |
|            8 |      579 | 2024-06-23 | Revenant     | L   | 0.991      | -            | -                | -                | -         |    -9.54 | arvid, oopee, Sm1llee, Welho, ykis |
|            7 |     1185 | 2024-06-02 | HAVU         | L   | 0.852      | -            | -                | -                | -         |   -12.18 | arvid, japE, oopee, Welho, ykis    |
|            6 |     1768 | 2024-05-14 | NOM          | L   | 0.724      | -            | -                | -                | -         |   -16.33 | arvid, japE, oopee, Welho, ykis    |
|            5 |     1785 | 2024-05-13 | DMS          | L   | 0.719      | -            | -                | -                | -         |    -6.91 | arvid, japE, oopee, Welho, ykis    |
|            4 |     1952 | 2024-05-05 | ENCE Academy | W   | 0.666      | 0.306        | 0.007 (0.001)    | 0.183 (0.037)    | 0 (0.000) |    11.65 | arvid, japE, oopee, Welho, ykis    |
|            3 |     1971 | 2024-05-04 | jefet        | W   | 0.660      | 0.306        | 0.001 (0.000)    | 0.025 (0.005)    | 0 (0.000) |     5.95 | arvid, japE, oopee, Welho, ykis    |
|            2 |     2105 | 2024-04-28 | ENCE Academy | W   | 0.618      | 0.306        | 0.007 (0.001)    | 0.183 (0.035)    | 0 (0.000) |    11.66 | arvid, japE, oopee, Welho, ykis    |
|            1 |     4038 | 2024-02-03 | TMVG         | L   | 0.054      | -            | -                | -                | -         |    -1.29 | arvid, japE, oopee, ottob, Tumppis |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,142.52)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
