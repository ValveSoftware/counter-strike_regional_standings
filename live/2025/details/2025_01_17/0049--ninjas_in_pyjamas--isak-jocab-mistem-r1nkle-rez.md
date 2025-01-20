### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [49](../../standings_global_2025_01_17.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_17.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_01_17.md)<br />
<br />
Final Rank Value:  1101.1<br />
<br />
Final Rank Value (1101.1) = Starting Rank Value (1102.2) + Head To Head Adjustments (-1.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.415[<sup>2</sup>](#table1)
- Opponent Network: 0.079[<sup>2</sup>](#table1)
- LAN Wins: 0.446[<sup>2</sup>](#table1)

The average of these factors is 0.354<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1102.2
- 400 + ( ( 0.354 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1102.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           30 |      599 | 2024-11-24 | Spirit        | L   | 0.838      | -            | -                | -                | -         |    -0.27 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |      606 | 2024-11-23 | 9 Pandas      | W   | 0.835      | 0.143        | 0.159 (0.019)    | 0.802 (0.096)    | 1 (0.835) |    16.99 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      632 | 2024-11-23 | TSM           | W   | 0.830      | 0.143        | 0.034 (0.004)    | 0.409 (0.048)    | 1 (0.830) |     6.70 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      664 | 2024-11-21 | Falcons       | L   | 0.822      | -            | -                | -                | -         |    -0.76 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      680 | 2024-11-21 | PARIVISION    | W   | 0.817      | 0.143        | 0.024 (0.003)    | 0.246 (0.029)    | 1 (0.817) |     7.57 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      692 | 2024-11-20 | G2            | L   | 0.815      | -            | -                | -                | -         |    -0.15 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      892 | 2024-11-12 | BetBoom       | L   | 0.758      | -            | -                | -                | -         |   -10.64 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |      923 | 2024-11-11 | Zero Tenacity | W   | 0.753      | 0.384        | 0.083 (0.024)    | 0.570 (0.165)    | 0 (0.000) |    11.15 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |      963 | 2024-11-09 | Metizport     | L   | 0.739      | -            | -                | -                | -         |    -5.40 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |      984 | 2024-11-08 | Alliance      | W   | 0.733      | 0.432        | 0.037 (0.012)    | 0.384 (0.122)    | 1 (0.733) |     6.98 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1263 | 2024-10-25 | Imperial      | L   | 0.639      | -            | -                | -                | -         |    -7.66 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1291 | 2024-10-23 | Falcons       | L   | 0.627      | -            | -                | -                | -         |    -0.49 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1293 | 2024-10-23 | Imperial      | W   | 0.625      | 0.477        | 0.164 (0.049)    | 0.428 (0.128)    | 0 (0.000) |    12.29 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1438 | 2024-10-16 | JANO          | L   | 0.580      | -            | -                | -                | -         |   -14.55 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1451 | 2024-10-16 | B8            | L   | 0.578      | -            | -                | -                | -         |    -7.37 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1731 | 2024-10-04 | ECSTATIC      | L   | 0.497      | -            | -                | -                | -         |    -9.95 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     2618 | 2024-09-07 | Falcons       | L   | 0.319      | -            | -                | -                | -         |    -0.27 | alex, isak, maxster, r1nkle, REZ |
|           13 |     2669 | 2024-09-05 | FaZe          | L   | 0.306      | -            | -                | -                | -         |    -0.11 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2718 | 2024-09-04 | Natus Vincere | L   | 0.299      | -            | -                | -                | -         |    -0.25 | alex, isak, maxster, r1nkle, REZ |
|           11 |     2752 | 2024-09-03 | Falcons       | W   | 0.292      | 0.889        | 0.874 (0.227)    | 0.618 (0.161)    | 1 (0.292) |     8.99 | alex, isak, maxster, r1nkle, REZ |
|           10 |     2859 | 2024-08-29 | Monte         | L   | 0.260      | -            | -                | -                | -         |    -4.90 | alex, isak, maxster, r1nkle, REZ |
|            9 |     2870 | 2024-08-29 | GUN5          | L   | 0.259      | -            | -                | -                | -         |    -4.22 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3215 | 2024-08-21 | AMKAL         | L   | 0.207      | -            | -                | -                | -         |    -5.30 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3315 | 2024-08-19 | Cloud9        | L   | 0.192      | -            | -                | -                | -         |    -3.56 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3322 | 2024-08-19 | PARIVISION    | W   | 0.192      | 0.143        | 0.024 (0.001)    | 0.246 (0.007)    | 0 (0.000) |     1.35 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3785 | 2024-08-04 | Astralis      | L   | 0.091      | -            | -                | -                | -         |    -0.70 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3809 | 2024-08-03 | G2            | L   | 0.086      | -            | -                | -                | -         |    -0.02 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3847 | 2024-08-02 | FaZe          | W   | 0.079      | 0.581        | 1.000 (0.046)    | 0.554 (0.025)    | 1 (0.079) |     2.46 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3891 | 2024-08-01 | Cloud9        | W   | 0.072      | 0.581        | 0.075 (0.003)    | 0.341 (0.014)    | 1 (0.072) |     0.94 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3943 | 2024-07-31 | G2            | L   | 0.065      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,838.19)
- Divide that value by the 5th highest value among all rosters ($225,816.70)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.759 | $1,500.00      | $1,138.14       |
| 2024-11-09 |      0.739 | $11,635.00     | $8,602.18       |
| 2024-10-20 |      0.606 | $5,000.00      | $3,030.26       |
| 2024-09-22 |      0.420 | $7,000.00      | $2,938.11       |
| 2024-08-25 |      0.233 | $5,000.00      | $1,164.64       |
| 2024-08-04 |      0.092 | $10,500.00     | $964.86         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
