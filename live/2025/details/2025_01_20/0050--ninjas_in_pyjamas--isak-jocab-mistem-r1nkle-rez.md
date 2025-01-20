### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [50](../../standings_global_2025_01_20.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_20.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_01_20.md)<br />
<br />
Final Rank Value:  1096.8<br />
<br />
Final Rank Value (1096.8) = Starting Rank Value (1096.9) + Head To Head Adjustments (-0.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.475[<sup>1</sup>](#table2)
- Bounty Collected: 0.410[<sup>2</sup>](#table1)
- Opponent Network: 0.076[<sup>2</sup>](#table1)
- LAN Wins: 0.442[<sup>2</sup>](#table1)

The average of these factors is 0.351<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1096.9
- 400 + ( ( 0.351 - 0.000 ) / ( 0.805 - 0.000 ) ) * 1600 = 1096.9


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
|           30 |      608 | 2024-11-24 | Spirit        | L   | 0.824      | -            | -                | -                | -         |    -0.25 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |      615 | 2024-11-23 | 9 Pandas      | W   | 0.822      | 0.143        | 0.160 (0.019)    | 0.804 (0.094)    | 1 (0.822) |    16.78 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      641 | 2024-11-23 | TSM           | W   | 0.816      | 0.143        | 0.034 (0.004)    | 0.401 (0.047)    | 1 (0.816) |     6.61 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      673 | 2024-11-21 | Falcons       | L   | 0.809      | -            | -                | -                | -         |    -0.72 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      689 | 2024-11-21 | PARIVISION    | W   | 0.803      | 0.143        | 0.023 (0.003)    | 0.238 (0.027)    | 1 (0.803) |     7.32 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      701 | 2024-11-20 | G2            | L   | 0.802      | -            | -                | -                | -         |    -0.14 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      901 | 2024-11-12 | BetBoom       | L   | 0.744      | -            | -                | -                | -         |   -10.34 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |      932 | 2024-11-11 | Zero Tenacity | W   | 0.739      | 0.384        | 0.083 (0.024)    | 0.567 (0.161)    | 0 (0.000) |    10.99 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |      972 | 2024-11-09 | Metizport     | L   | 0.726      | -            | -                | -                | -         |    -5.19 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |      993 | 2024-11-08 | Alliance      | W   | 0.719      | 0.432        | 0.037 (0.012)    | 0.383 (0.119)    | 1 (0.719) |     6.96 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1272 | 2024-10-25 | Imperial      | L   | 0.625      | -            | -                | -                | -         |    -7.46 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1300 | 2024-10-23 | Falcons       | L   | 0.613      | -            | -                | -                | -         |    -0.46 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1302 | 2024-10-23 | Imperial      | W   | 0.612      | 0.477        | 0.164 (0.048)    | 0.424 (0.124)    | 0 (0.000) |    12.07 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1447 | 2024-10-16 | JANO          | L   | 0.566      | -            | -                | -                | -         |   -14.18 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1460 | 2024-10-16 | B8            | L   | 0.564      | -            | -                | -                | -         |    -7.17 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1740 | 2024-10-04 | ECSTATIC      | L   | 0.484      | -            | -                | -                | -         |    -9.63 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     2627 | 2024-09-07 | Falcons       | L   | 0.305      | -            | -                | -                | -         |    -0.24 | alex, isak, maxster, r1nkle, REZ |
|           13 |     2678 | 2024-09-05 | FaZe          | L   | 0.293      | -            | -                | -                | -         |    -0.10 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2727 | 2024-09-04 | Natus Vincere | L   | 0.286      | -            | -                | -                | -         |    -0.23 | alex, isak, maxster, r1nkle, REZ |
|           11 |     2761 | 2024-09-03 | Falcons       | W   | 0.279      | 0.889        | 0.874 (0.216)    | 0.621 (0.154)    | 1 (0.279) |     8.58 | alex, isak, maxster, r1nkle, REZ |
|           10 |     2868 | 2024-08-29 | Monte         | L   | 0.246      | -            | -                | -                | -         |    -4.62 | alex, isak, maxster, r1nkle, REZ |
|            9 |     2879 | 2024-08-29 | GUN5          | L   | 0.245      | -            | -                | -                | -         |    -3.94 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3224 | 2024-08-21 | AMKAL         | L   | 0.193      | -            | -                | -                | -         |    -4.94 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3324 | 2024-08-19 | Cloud9        | L   | 0.179      | -            | -                | -                | -         |    -3.27 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3331 | 2024-08-19 | PARIVISION    | W   | 0.178      | 0.143        | 0.023 (0.001)    | 0.238 (0.006)    | 0 (0.000) |     1.24 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3794 | 2024-08-04 | Astralis      | L   | 0.078      | -            | -                | -                | -         |    -0.59 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3818 | 2024-08-03 | G2            | L   | 0.072      | -            | -                | -                | -         |    -0.02 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3856 | 2024-08-02 | FaZe          | W   | 0.065      | 0.581        | 1.000 (0.038)    | 0.558 (0.021)    | 1 (0.065) |     2.04 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3900 | 2024-08-01 | Cloud9        | W   | 0.058      | 0.581        | 0.074 (0.003)    | 0.337 (0.011)    | 1 (0.058) |     0.77 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3952 | 2024-07-31 | G2            | L   | 0.051      | -            | -                | -                | -         |    -0.01 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($17,286.76)
- Divide that value by the 5th highest value among all rosters ($221,379.22)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.745 | $1,500.00      | $1,117.79       |
| 2024-11-09 |      0.726 | $11,635.00     | $8,444.29       |
| 2024-10-20 |      0.592 | $5,000.00      | $2,962.41       |
| 2024-09-22 |      0.406 | $7,000.00      | $2,843.12       |
| 2024-08-25 |      0.219 | $5,000.00      | $1,096.78       |
| 2024-08-04 |      0.078 | $10,500.00     | $822.37         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
