### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ<br />
Global Rank: [142](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [94]( ../standings_europe.md)<br />
<br />
Final Rank Value:  731.1<br />
<br />
Final Rank Value (731.1) = Starting Rank Value (706.2) + Head To Head Adjustments (24.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.248[<sup>1</sup>](#table2)
- Bounty Collected: 0.305[<sup>2</sup>](#table1)
- Opponent Network: 0.040[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.148<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 706.2
- 400 + ( ( 0.148 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 706.2


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
|           28 |     2258 | 2024-05-02 | 1WIN              | L   | 0.598      | -            | -                | -                | -         |    -5.06 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           27 |     2329 | 2024-04-29 | Sashi             | L   | 0.578      | -            | -                | -                | -         |    -1.38 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     2355 | 2024-04-27 | Zero Tenacity     | L   | 0.567      | -            | -                | -                | -         |    -2.57 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     2626 | 2024-04-18 | Secret            | L   | 0.504      | -            | -                | -                | -         |   -11.97 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2652 | 2024-04-17 | Portugal          | L   | 0.499      | -            | -                | -                | -         |    -9.13 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2688 | 2024-04-16 | Passion UA        | W   | 0.493      | 0.384        | 0.172 (0.033)    | 1.000 (0.189)    | 0 (0.000) |    12.98 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2773 | 2024-04-11 | PARIVISION        | W   | 0.460      | 0.384        | 0.018 (0.003)    | 0.452 (0.080)    | 0 (0.000) |    12.57 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     3100 | 2024-04-02 | ex-Guild Eagles   | W   | 0.397      | 0.384        | 0.007 (0.001)    | 0.226 (0.034)    | 0 (0.000) |     7.88 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     3106 | 2024-04-01 | ex-Guild Eagles   | L   | 0.393      | -            | -                | -                | -         |    -4.66 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     3180 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.360      | -            | -                | -                | -         |    -0.07 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     3184 | 2024-03-27 | FORZE             | W   | 0.359      | 0.143        | 0.060 (0.003)    | 0.189 (0.010)    | 0 (0.000) |     8.73 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           17 |     3528 | 2024-03-10 | Young Ninjas      | L   | 0.246      | -            | -                | -                | -         |    -3.34 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           16 |     3601 | 2024-03-07 | Sangal            | W   | 0.226      | 0.143        | 0.221 (0.007)    | 0.824 (0.027)    | 0 (0.000) |     6.49 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3677 | 2024-03-05 | Entropiq          | W   | 0.211      | -            | -                | -                | 0 (0.000) |     1.96 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           14 |     3731 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.193      | 0.358        | 0.032 (0.002)    | 0.564 (0.039)    | 0 (0.000) |     5.01 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           13 |     3825 | 2024-02-26 | Imperial fe       | W   | 0.158      | 0.143        | 0.131 (0.003)    | 0.270 (0.006)    | 0 (0.000) |     4.31 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           12 |     3873 | 2024-02-24 | Portugal          | W   | 0.146      | 0.358        | -                | 0.122 (0.006)    | 0 (0.000) |     2.20 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           11 |     4013 | 2024-02-18 | Sangal            | L   | 0.104      | -            | -                | -                | -         |    -0.25 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     4053 | 2024-02-16 | SINNERS           | L   | 0.093      | -            | -                | -                | -         |    -0.39 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     4063 | 2024-02-16 | B8                | L   | 0.092      | -            | -                | -                | -         |    -0.30 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     4065 | 2024-02-16 | SINNERS           | W   | 0.092      | 0.143        | 0.038 (0.001)    | 0.721 (0.009)    | 0 (0.000) |     2.52 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     4193 | 2024-02-10 | Secret            | L   | 0.051      | -            | -                | -                | -         |    -1.16 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     4236 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.025      | -            | -                | -                | -         |    -0.13 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     4255 | 2024-02-04 | Metizport         | W   | 0.014      | 0.358        | 0.039 (0.000)    | 0.427 (0.002)    | -         |     0.32 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     4268 | 2024-02-04 | Zero Tenacity     | W   | 0.012      | 0.143        | 0.139 (0.000)    | -                | -         |     0.34 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     4289 | 2024-02-03 | Nexus             | W   | 0.006      | -            | -                | -                | -         |     0.13 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     4295 | 2024-02-03 | North Macedonia   | L   | 0.005      | -            | -                | -                | -         |    -0.13 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     4297 | 2024-02-03 | Jake Bube         | W   | 0.005      | -            | -                | -                | -         |     0.02 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($299.67)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
