### Roster Details<br />
Team Name: Rhyno<br />
Roster: Ag1l, DDias, krazy, snapy, TMKj<br />
Global Rank: [69](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
<br />
Final Rank Value:  962.7<br />
<br />
Final Rank Value (962.7) = Starting Rank Value (932.5) + Head To Head Adjustments (30.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.458[<sup>1</sup>](#table2)
- Bounty Collected: 0.334[<sup>2</sup>](#table1)
- Opponent Network: 0.149[<sup>2</sup>](#table1)
- LAN Wins: 0.138[<sup>2</sup>](#table1)

The average of these factors is 0.270<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 932.5
- 400 + ( ( 0.270 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 932.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           25 |      306 | 2024-08-05 | Meteor        | W   | 1.000      | 0.143        | 0.013 (0.002)    | -                | 0 (0.000) |     7.60 | Ag1l, DDias, krazy, snapy, TMKj        |
|           24 |      554 | 2024-07-30 | Enterprise    | L   | 1.000      | -            | -                | -                | -         |   -17.76 | Ag1l, DDias, krazy, snapy, TMKj        |
|           23 |      769 | 2024-07-23 | FAVBET        | W   | 1.000      | 0.143        | -                | 0.413 (0.059)    | 0 (0.000) |    10.93 | Ag1l, DDias, krazy, snapy, TMKj        |
|           22 |      875 | 2024-07-19 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -11.71 | Ag1l, DDias, krazy, snapy, TMKj        |
|           21 |      948 | 2024-07-18 | Nexus         | W   | 1.000      | 0.500        | 0.013 (0.006)    | 0.548 (0.274)    | 0 (0.000) |     6.83 | Ag1l, DDias, krazy, snapy, TMKj        |
|           20 |     1022 | 2024-07-17 | HAVU          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.67 | Ag1l, DDias, krazy, snapy, TMKj        |
|           19 |     1074 | 2024-07-16 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -12.10 | Ag1l, DDias, krazy, snapy, TMKj        |
|           18 |     1491 | 2024-06-11 | Nemiga        | L   | 0.772      | -            | -                | -                | -         |    -6.04 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |     1513 | 2024-06-10 | CYBERSHOKE    | W   | 0.766      | 0.500        | 0.036 (0.014)    | 0.442 (0.169)    | 0 (0.000) |     9.14 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1544 | 2024-06-09 | Rebels        | W   | 0.760      | 0.500        | 0.036 (0.013)    | 0.585 (0.222)    | 0 (0.000) |    12.92 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1638 | 2024-06-08 | NAVI Junior   | W   | 0.751      | 0.500        | 0.003 (0.001)    | 0.102 (0.038)    | 0 (0.000) |     5.09 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1730 | 2024-06-06 | MOUZ NXT      | L   | 0.740      | -            | -                | -                | -         |    -7.59 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1841 | 2024-06-04 | Endpoint      | W   | 0.727      | 0.500        | 0.042 (0.015)    | 0.591 (0.215)    | -         |    11.29 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     2040 | 2024-05-28 | Sampi         | L   | 0.678      | -            | -                | -                | -         |   -12.81 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     2063 | 2024-05-27 | Endpoint      | W   | 0.672      | 0.435        | 0.042 (0.012)    | 0.591 (0.172)    | -         |    10.72 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     2105 | 2024-05-25 | Zero Tenacity | L   | 0.657      | -            | -                | -                | -         |    -7.22 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     2171 | 2024-05-22 | MOUZ NXT      | W   | 0.638      | 0.435        | 0.130 (0.036)    | 0.929 (0.258)    | -         |    11.79 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     2208 | 2024-05-21 | B8            | L   | 0.633      | -            | -                | -                | -         |    -5.82 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     2315 | 2024-05-18 | LEON          | W   | 0.611      | 0.143        | 0.006 (0.001)    | -                | -         |     3.49 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     2371 | 2024-05-16 | CPH Wolves    | W   | 0.599      | 0.143        | -                | 0.345 (0.030)    | -         |     5.21 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     2430 | 2024-05-15 | EYEBALLERS    | W   | 0.591      | 0.143        | -                | 0.614 (0.052)    | -         |     7.72 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     2530 | 2024-05-12 | AL QATRAO     | W   | 0.572      | 0.306        | 0.003 (0.001)    | -                | 1 (0.572) |     3.37 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     2568 | 2024-05-11 | ALL-IN        | W   | 0.564      | -            | -                | -                | 1 (0.564) |     1.64 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     4187 | 2024-03-03 | Portugal      | L   | 0.106      | -            | -                | -                | -         |    -2.76 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     4214 | 2024-03-02 | AL QATRAO     | W   | 0.099      | -            | -                | -                | 1 (0.099) |     0.57 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($21,016.87)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.772 | $25,000.00     | $19,303.46      |
| 2024-05-12 |      0.572 | $2,693.00      | $1,540.83       |
| 2024-03-03 |      0.106 | $1,625.00      | $172.58         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
