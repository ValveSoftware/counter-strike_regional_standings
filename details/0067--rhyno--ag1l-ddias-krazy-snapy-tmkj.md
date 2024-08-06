### Roster Details<br />
Team Name: Rhyno<br />
Roster: Ag1l, DDias, krazy, snapy, TMKj<br />
Global Rank: [67](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [49]( ../standings_europe.md)<br />
<br />
Final Rank Value:  988.9<br />
<br />
Final Rank Value (988.9) = Starting Rank Value (966.8) + Head To Head Adjustments (22.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.465[<sup>1</sup>](#table2)
- Bounty Collected: 0.330[<sup>2</sup>](#table1)
- Opponent Network: 0.146[<sup>2</sup>](#table1)
- LAN Wins: 0.161[<sup>2</sup>](#table1)

The average of these factors is 0.276<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 966.8
- 400 + ( ( 0.276 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 966.8


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
|           25 |       33 | 2024-08-05 | Meteor        | W   | 1.000      | 0.143        | 0.014 (0.002)    | -                | 0 (0.000) |     7.41 | Ag1l, DDias, krazy, snapy, TMKj        |
|           24 |      281 | 2024-07-30 | Enterprise    | L   | 1.000      | -            | -                | -                | -         |   -17.96 | Ag1l, DDias, krazy, snapy, TMKj        |
|           23 |      496 | 2024-07-23 | FAVBET        | W   | 1.000      | 0.143        | -                | 0.364 (0.052)    | 0 (0.000) |    10.08 | Ag1l, DDias, krazy, snapy, TMKj        |
|           22 |      602 | 2024-07-19 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -11.64 | Ag1l, DDias, krazy, snapy, TMKj        |
|           21 |      675 | 2024-07-18 | Nexus         | W   | 1.000      | 0.500        | 0.014 (0.007)    | 0.447 (0.223)    | 0 (0.000) |     6.31 | Ag1l, DDias, krazy, snapy, TMKj        |
|           20 |      749 | 2024-07-17 | HAVU          | W   | 1.000      | -            | -                | -                | 0 (0.000) |     5.54 | Ag1l, DDias, krazy, snapy, TMKj        |
|           19 |      801 | 2024-07-16 | MOUZ NXT      | L   | 1.000      | -            | -                | -                | -         |   -12.06 | Ag1l, DDias, krazy, snapy, TMKj        |
|           18 |     1218 | 2024-06-11 | Nemiga        | L   | 0.826      | -            | -                | -                | -         |    -7.51 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           17 |     1240 | 2024-06-10 | CYBERSHOKE    | W   | 0.820      | 0.500        | 0.039 (0.016)    | 0.378 (0.155)    | 0 (0.000) |     8.72 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           16 |     1271 | 2024-06-09 | Rebels        | W   | 0.814      | 0.500        | 0.038 (0.015)    | 0.578 (0.235)    | 0 (0.000) |    14.04 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           15 |     1365 | 2024-06-08 | NAVI Junior   | W   | 0.805      | 0.500        | 0.003 (0.001)    | 0.115 (0.046)    | 0 (0.000) |     5.14 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           14 |     1457 | 2024-06-06 | MOUZ NXT      | L   | 0.794      | -            | -                | -                | -         |    -8.06 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           13 |     1568 | 2024-06-04 | Endpoint      | W   | 0.781      | 0.500        | 0.012 (0.005)    | 0.540 (0.211)    | -         |     9.77 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           12 |     1767 | 2024-05-28 | Sampi         | L   | 0.732      | -            | -                | -                | -         |   -13.92 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           11 |     1790 | 2024-05-27 | Endpoint      | W   | 0.726      | 0.435        | 0.012 (0.004)    | 0.540 (0.170)    | -         |     9.25 | DDias, krazy, renatoohaxx, snapy, TMKj |
|           10 |     1832 | 2024-05-25 | Zero Tenacity | L   | 0.711      | -            | -                | -                | -         |    -7.84 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            9 |     1898 | 2024-05-22 | MOUZ NXT      | W   | 0.692      | 0.435        | 0.139 (0.042)    | 0.961 (0.289)    | -         |    12.61 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            8 |     1935 | 2024-05-21 | B8            | L   | 0.687      | -            | -                | -                | -         |    -6.20 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            7 |     2042 | 2024-05-18 | LEON          | W   | 0.665      | 0.143        | 0.007 (0.001)    | -                | -         |     3.51 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            6 |     2098 | 2024-05-16 | CPH Wolves    | W   | 0.653      | 0.143        | -                | 0.354 (0.033)    | -         |     5.31 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            5 |     2157 | 2024-05-15 | EYEBALLERS    | W   | 0.645      | 0.143        | -                | 0.488 (0.045)    | -         |     7.82 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            4 |     2257 | 2024-05-12 | AL QATRAO     | W   | 0.626      | 0.306        | 0.004 (0.001)    | -                | 1 (0.626) |     3.50 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            3 |     2295 | 2024-05-11 | ALL-IN        | W   | 0.618      | -            | -                | -                | 1 (0.618) |     1.57 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            2 |     3914 | 2024-03-03 | Portugal      | L   | 0.160      | -            | -                | -                | -         |    -4.20 | DDias, krazy, renatoohaxx, snapy, TMKj |
|            1 |     3941 | 2024-03-02 | AL QATRAO     | W   | 0.153      | -            | -                | -                | 1 (0.153) |     0.82 | DDias, krazy, renatoohaxx, snapy, TMKj |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($22,602.36)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-11 |      0.826 | $25,000.00     | $20,655.44      |
| 2024-05-12 |      0.626 | $2,693.00      | $1,686.46       |
| 2024-03-03 |      0.160 | $1,625.00      | $260.46         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
