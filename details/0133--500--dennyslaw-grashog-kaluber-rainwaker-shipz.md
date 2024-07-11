### Roster Details<br />
Team Name: 500<br />
Roster: dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [133](../standings_global.md)<br />
Regional Rank: [85]( ../standings_europe.md)<br />
Final Rank Value:  778.8<br />
<br />
Final Rank Value (778.8) = Starting Rank Value (735.2) + Head To Head Adjustments (43.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.260[<sup>1</sup>](#table2)
- Bounty Collected: 0.317[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 735.2
- 400 + ( ( 0.159 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 735.2


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
|           33 |     1564 | 2024-05-02 | 1WIN              | L   | 0.733      | -            | -                | -                | -         |    -5.64 | dennyslaw, Grashog, KalubeR, Rainwaker, SHiPZ |
|           32 |     1635 | 2024-04-29 | Sashi             | L   | 0.712      | -            | -                | -                | -         |    -1.84 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           31 |     1661 | 2024-04-27 | Zero Tenacity     | L   | 0.701      | -            | -                | -                | -         |    -3.90 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           30 |     1932 | 2024-04-18 | Secret            | L   | 0.639      | -            | -                | -                | -         |   -15.47 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           29 |     1958 | 2024-04-17 | Portugal          | L   | 0.633      | -            | -                | -                | -         |   -11.51 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           28 |     1994 | 2024-04-16 | Passion UA        | W   | 0.627      | 0.384        | 0.087 (0.021)    | 0.821 (0.198)    | 0 (0.000) |    14.51 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           27 |     2079 | 2024-04-11 | PARIVISION        | W   | 0.594      | 0.384        | 0.026 (0.006)    | 0.446 (0.102)    | 0 (0.000) |    14.01 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           26 |     2406 | 2024-04-02 | ex-Guild Eagles   | W   | 0.531      | 0.384        | 0.011 (0.002)    | 0.326 (0.066)    | 0 (0.000) |    11.01 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           25 |     2412 | 2024-04-01 | ex-Guild Eagles   | L   | 0.527      | -            | -                | -                | -         |    -5.74 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           24 |     2486 | 2024-03-27 | Ninjas in Pyjamas | L   | 0.494      | -            | -                | -                | -         |    -0.05 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           23 |     2490 | 2024-03-27 | FORZE             | W   | 0.494      | 0.143        | 0.095 (0.007)    | 0.293 (0.021)    | 0 (0.000) |    12.57 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           22 |     2834 | 2024-03-10 | Young Ninjas      | L   | 0.380      | -            | -                | -                | -         |    -5.00 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           21 |     2907 | 2024-03-07 | Sangal            | W   | 0.360      | 0.143        | 0.231 (0.012)    | 0.853 (0.044)    | 0 (0.000) |    10.12 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           20 |     2983 | 2024-03-05 | Entropiq          | W   | 0.345      | -            | -                | -                | 0 (0.000) |     3.17 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           19 |     3037 | 2024-03-02 | ALTERNATE aTTaX   | W   | 0.327      | 0.358        | 0.050 (0.006)    | 0.577 (0.068)    | 0 (0.000) |     8.58 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           18 |     3131 | 2024-02-26 | Imperial fe       | W   | 0.292      | 0.143        | 0.195 (0.008)    | -                | 0 (0.000) |     8.28 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           17 |     3179 | 2024-02-24 | Portugal          | W   | 0.280      | 0.358        | -                | 0.175 (0.018)    | 0 (0.000) |     4.47 | dennyslaw, Grashog, Rainwaker, REDSTAR, SHiPZ |
|           16 |     3319 | 2024-02-18 | Sangal            | L   | 0.238      | -            | -                | -                | -         |    -0.66 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           15 |     3359 | 2024-02-16 | SINNERS           | L   | 0.227      | -            | -                | -                | -         |    -0.81 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           14 |     3369 | 2024-02-16 | B8                | L   | 0.226      | -            | -                | -                | -         |    -0.61 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           13 |     3371 | 2024-02-16 | SINNERS           | W   | 0.226      | 0.143        | 0.057 (0.002)    | 0.767 (0.025)    | 0 (0.000) |     6.34 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           12 |     3499 | 2024-02-10 | Secret            | L   | 0.185      | -            | -                | -                | -         |    -4.25 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           11 |     3542 | 2024-02-06 | ALTERNATE aTTaX   | L   | 0.160      | -            | -                | -                | -         |    -0.73 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|           10 |     3561 | 2024-02-04 | Metizport         | W   | 0.148      | 0.358        | 0.065 (0.003)    | 0.489 (0.026)    | -         |     3.66 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            9 |     3574 | 2024-02-04 | Zero Tenacity     | W   | 0.146      | 0.143        | 0.153 (0.003)    | 1.000 (0.021)    | -         |     4.10 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            8 |     3595 | 2024-02-03 | Romania           | W   | 0.140      | -            | -                | -                | -         |     2.98 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            7 |     3601 | 2024-02-03 | North Macedonia   | L   | 0.139      | -            | -                | -                | -         |    -3.47 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            6 |     3603 | 2024-02-03 | Serbia            | W   | 0.139      | -            | -                | -                | -         |     2.63 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            5 |     3702 | 2024-01-30 | fnatic            | L   | 0.113      | -            | -                | -                | -         |    -0.02 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            4 |     3707 | 2024-01-30 | GODSENT           | L   | 0.112      | -            | -                | -                | -         |    -2.79 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            3 |     4049 | 2024-01-17 | Sprout            | L   | 0.028      | -            | -                | -                | -         |    -0.72 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            2 |     4053 | 2024-01-17 | Ninjas in Pyjamas | W   | 0.028      | -            | -                | -                | -         |     0.39 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |
|            1 |     4208 | 2024-01-13 | Gaimin Gladiators | L   | 0.001      | -            | -                | -                | -         |    -0.00 | dennyslaw, Patrick, Rainwaker, REDSTAR, SHiPZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($366.73)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
