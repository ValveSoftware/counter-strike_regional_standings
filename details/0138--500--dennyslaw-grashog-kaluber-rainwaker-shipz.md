### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [138](../standings_global.md)<br />
Regional Rank: [90]( ../standings_europe.md)<br />
Final Rank Value:  772.7<br />
<br />
Final Rank Value (772.7) = Starting Rank Value (735.5) + Head To Head Adjustments (37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.312[<sup>2</sup>](#table1)
- Opponent Network: 0.053[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.5
- 400 + ( ( 0.156 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 735.5


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
|           30 |     1728 | 2024-05-02 | 1WIN              | L   | 0.693      | -            | -                | -                | -         |    -5.42 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           29 |     1799 | 2024-04-29 | Sashi             | L   | 0.672      | -            | -                | -                | -         |    -1.79 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     1825 | 2024-04-27 | Zero Tenacity     | L   | 0.661      | -            | -                | -                | -         |    -3.58 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     2096 | 2024-04-18 | Secret            | L   | 0.599      | -            | -                | -                | -         |   -14.52 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     2122 | 2024-04-17 | Portugal          | L   | 0.593      | -            | -                | -                | -         |   -10.68 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     2158 | 2024-04-16 | Passion UA        | W   | 0.587      | 0.384        | 0.087 (0.020)    | 0.847 (0.191)    | 0 (0.000) |    13.85 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2243 | 2024-04-11 | PARIVISION        | W   | 0.554      | 0.384        | 0.027 (0.006)    | 0.424 (0.090)    | 0 (0.000) |    13.04 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2570 | 2024-04-02 | ex-Guild Eagles   | W   | 0.492      | 0.384        | 0.011 (0.002)    | 0.298 (0.056)    | 0 (0.000) |    10.20 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2576 | 2024-04-01 | ex-Guild Eagles   | L   | 0.488      | -            | -                | -                | -         |    -5.30 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     2650 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.455      | -            | -                | -                | -         |    -0.04 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     2654 | 2024-03-27 | FORZE             | W   | 0.454      | 0.143        | 0.095 (0.006)    | 0.269 (0.017)    | 0 (0.000) |    11.53 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     2998 | 2024-03-10 | Young Ninjas      | L   | 0.340      | -            | -                | -                | -         |    -4.26 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     3071 | 2024-03-07 | Sangal            | W   | 0.320      | 0.143        | 0.232 (0.011)    | 0.893 (0.041)    | 0 (0.000) |     9.06 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           17 |     3147 | 2024-03-05 | Entropiq          | W   | 0.306      | -            | -                | -                | 0 (0.000) |     2.81 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           16 |     3201 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.287      | 0.358        | 0.050 (0.005)    | 0.644 (0.066)    | 0 (0.000) |     7.63 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3295 | 2024-02-26 | Imperial fe       | W   | 0.252      | 0.143        | 0.196 (0.007)    | -                | 0 (0.000) |     7.18 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           14 |     3343 | 2024-02-24 | Portugal          | W   | 0.240      | 0.358        | -                | 0.162 (0.014)    | 0 (0.000) |     3.83 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           13 |     3483 | 2024-02-18 | Sangal            | L   | 0.198      | -            | -                | -                | -         |    -0.54 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     3523 | 2024-02-16 | SINNERS           | L   | 0.187      | -            | -                | -                | -         |    -0.64 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     3533 | 2024-02-16 | B8                | L   | 0.187      | -            | -                | -                | -         |    -0.51 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     3535 | 2024-02-16 | SINNERS           | W   | 0.186      | 0.143        | 0.058 (0.002)    | 0.744 (0.020)    | 0 (0.000) |     5.25 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     3663 | 2024-02-10 | Secret            | L   | 0.146      | -            | -                | -                | -         |    -3.34 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     3706 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.120      | -            | -                | -                | -         |    -0.52 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     3725 | 2024-02-04 | Metizport         | W   | 0.108      | 0.358        | 0.064 (0.002)    | 0.478 (0.019)    | -         |     2.68 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     3738 | 2024-02-04 | Zero Tenacity     | W   | 0.106      | 0.143        | 0.154 (0.002)    | 1.000 (0.015)    | -         |     2.98 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     3759 | 2024-02-03 | Nexus             | W   | 0.100      | -            | -                | -                | -         |     2.18 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     3765 | 2024-02-03 | North Macedonia   | L   | 0.100      | -            | -                | -                | -         |    -2.49 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     3767 | 2024-02-03 | Jake Bube         | W   | 0.099      | -            | -                | -                | -         |     0.42 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     3866 | 2024-01-30 | fnatic            | L   | 0.074      | -            | -                | -                | -         |    -0.02 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     3871 | 2024-01-30 | GODSENT           | L   | 0.072      | -            | -                | -                | -         |    -1.81 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($346.92)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
