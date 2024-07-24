### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [142](../standings_global.md)<br />
Regional Rank: [93]( ../standings_europe.md)<br />
Final Rank Value:  742.5<br />
<br />
Final Rank Value (742.5) = Starting Rank Value (711.5) + Head To Head Adjustments (31.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.254[<sup>1</sup>](#table2)
- Bounty Collected: 0.313[<sup>2</sup>](#table1)
- Opponent Network: 0.048[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.154<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 711.5
- 400 + ( ( 0.154 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 711.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                        |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |     2016 | 2024-05-02 | 1WIN              | L   | 0.646      | -            | -                | -                | -         |    -5.46 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           29 |     2087 | 2024-04-29 | Sashi             | L   | 0.625      | -            | -                | -                | -         |    -1.55 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     2113 | 2024-04-27 | Zero Tenacity     | L   | 0.614      | -            | -                | -                | -         |    -3.08 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     2384 | 2024-04-18 | Secret            | L   | 0.552      | -            | -                | -                | -         |   -13.18 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     2410 | 2024-04-17 | Portugal          | L   | 0.546      | -            | -                | -                | -         |    -9.95 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     2446 | 2024-04-16 | Passion UA        | W   | 0.540      | 0.384        | 0.163 (0.034)    | 1.000 (0.208)    | 0 (0.000) |    13.88 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2531 | 2024-04-11 | PARIVISION        | W   | 0.507      | 0.384        | 0.022 (0.004)    | 0.429 (0.084)    | 0 (0.000) |    13.12 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2858 | 2024-04-02 | ex-Guild Eagles   | W   | 0.445      | 0.384        | 0.009 (0.002)    | 0.265 (0.045)    | 0 (0.000) |     8.91 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2864 | 2024-04-01 | ex-Guild Eagles   | L   | 0.440      | -            | -                | -                | -         |    -5.12 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     2938 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.407      | -            | -                | -                | -         |    -0.06 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     2942 | 2024-03-27 | FORZE             | W   | 0.407      | 0.143        | 0.078 (0.005)    | 0.233 (0.014)    | 0 (0.000) |    10.06 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     3286 | 2024-03-10 | Young Ninjas      | L   | 0.293      | -            | -                | -                | -         |    -3.90 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     3359 | 2024-03-07 | Sangal            | W   | 0.273      | 0.143        | 0.195 (0.008)    | 0.860 (0.034)    | 0 (0.000) |     7.62 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           17 |     3435 | 2024-03-05 | Entropiq          | W   | 0.258      | -            | -                | -                | 0 (0.000) |     2.43 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           16 |     3489 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.240      | 0.358        | 0.041 (0.004)    | 0.638 (0.055)    | 0 (0.000) |     6.27 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3583 | 2024-02-26 | Imperial fe       | W   | 0.205      | 0.143        | 0.165 (0.005)    | 0.308 (0.009)    | 0 (0.000) |     5.69 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           14 |     3631 | 2024-02-24 | Portugal          | W   | 0.193      | 0.358        | -                | 0.145 (0.010)    | 0 (0.000) |     2.99 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           13 |     3771 | 2024-02-18 | Sangal            | L   | 0.151      | -            | -                | -                | -         |    -0.48 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     3811 | 2024-02-16 | SINNERS           | L   | 0.140      | -            | -                | -                | -         |    -0.58 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     3821 | 2024-02-16 | B8                | L   | 0.139      | -            | -                | -                | -         |    -0.47 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     3823 | 2024-02-16 | SINNERS           | W   | 0.139      | 0.143        | 0.048 (0.001)    | 0.769 (0.015)    | 0 (0.000) |     3.82 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     3951 | 2024-02-10 | Secret            | L   | 0.099      | -            | -                | -                | -         |    -2.23 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     3994 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.073      | -            | -                | -                | -         |    -0.36 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     4013 | 2024-02-04 | Metizport         | W   | 0.061      | 0.358        | 0.051 (0.001)    | 0.460 (0.010)    | -         |     1.48 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     4026 | 2024-02-04 | Zero Tenacity     | W   | 0.059      | 0.143        | 0.173 (0.001)    | -                | -         |     1.67 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     4047 | 2024-02-03 | Nexus             | W   | 0.053      | -            | -                | -                | -         |     1.17 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     4053 | 2024-02-03 | North Macedonia   | L   | 0.053      | -            | -                | -                | -         |    -1.29 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     4055 | 2024-02-03 | Jake Bube         | W   | 0.052      | -            | -                | -                | -         |     0.24 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     4154 | 2024-01-30 | fnatic            | L   | 0.026      | -            | -                | -                | -         |    -0.01 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     4159 | 2024-01-30 | GODSENT           | L   | 0.025      | -            | -                | -                | -         |    -0.63 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($323.31)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
