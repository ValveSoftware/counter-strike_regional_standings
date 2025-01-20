### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [49](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  1103.5<br />
<br />
Final Rank Value (1103.5) = Starting Rank Value (1104.2) + Head To Head Adjustments (-0.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.476[<sup>1</sup>](#table2)
- Bounty Collected: 0.416[<sup>2</sup>](#table1)
- Opponent Network: 0.081[<sup>2</sup>](#table1)
- LAN Wins: 0.448[<sup>2</sup>](#table1)

The average of these factors is 0.355<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1104.2
- 400 + ( ( 0.355 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1104.2


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
|           30 |      622 | 2024-11-24 | Spirit        | L   | 0.844      | -            | -                | -                | -         |    -0.27 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |      629 | 2024-11-23 | 9 Pandas      | W   | 0.841      | 0.143        | 0.159 (0.019)    | 0.801 (0.096)    | 1 (0.841) |    17.12 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      655 | 2024-11-23 | TSM           | W   | 0.836      | 0.143        | 0.034 (0.004)    | 0.412 (0.049)    | 1 (0.836) |     6.83 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      687 | 2024-11-21 | Falcons       | L   | 0.828      | -            | -                | -                | -         |    -0.78 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      703 | 2024-11-21 | PARIVISION    | W   | 0.823      | 0.143        | 0.024 (0.003)    | 0.249 (0.029)    | 1 (0.823) |     7.80 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      715 | 2024-11-20 | G2            | L   | 0.822      | -            | -                | -                | -         |    -0.15 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      915 | 2024-11-12 | BetBoom       | L   | 0.764      | -            | -                | -                | -         |   -10.90 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |      946 | 2024-11-11 | Zero Tenacity | W   | 0.759      | 0.384        | 0.084 (0.024)    | 0.572 (0.167)    | 0 (0.000) |    11.44 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |      986 | 2024-11-09 | Metizport     | L   | 0.745      | -            | -                | -                | -         |    -5.49 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1007 | 2024-11-08 | Alliance      | W   | 0.739      | 0.432        | 0.037 (0.012)    | 0.385 (0.123)    | 1 (0.739) |     7.05 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1286 | 2024-10-25 | Imperial      | L   | 0.645      | -            | -                | -                | -         |    -7.72 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1314 | 2024-10-23 | Falcons       | L   | 0.633      | -            | -                | -                | -         |    -0.50 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1316 | 2024-10-23 | Imperial      | W   | 0.631      | 0.477        | 0.165 (0.050)    | 0.430 (0.130)    | 0 (0.000) |    12.41 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1461 | 2024-10-16 | JANO          | L   | 0.586      | -            | -                | -                | -         |   -14.64 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1474 | 2024-10-16 | B8            | L   | 0.584      | -            | -                | -                | -         |    -7.30 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1754 | 2024-10-04 | ECSTATIC      | L   | 0.503      | -            | -                | -                | -         |   -10.06 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     2641 | 2024-09-07 | Falcons       | L   | 0.325      | -            | -                | -                | -         |    -0.28 | alex, isak, maxster, r1nkle, REZ |
|           13 |     2692 | 2024-09-05 | FaZe          | L   | 0.313      | -            | -                | -                | -         |    -0.11 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2741 | 2024-09-04 | Natus Vincere | L   | 0.305      | -            | -                | -                | -         |    -0.24 | alex, isak, maxster, r1nkle, REZ |
|           11 |     2775 | 2024-09-03 | Falcons       | W   | 0.298      | 0.889        | 0.874 (0.232)    | 0.617 (0.164)    | 1 (0.298) |     9.18 | alex, isak, maxster, r1nkle, REZ |
|           10 |     2882 | 2024-08-29 | Monte         | L   | 0.266      | -            | -                | -                | -         |    -5.02 | alex, isak, maxster, r1nkle, REZ |
|            9 |     2893 | 2024-08-29 | GUN5          | L   | 0.265      | -            | -                | -                | -         |    -4.34 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3238 | 2024-08-21 | AMKAL         | L   | 0.213      | -            | -                | -                | -         |    -5.45 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3338 | 2024-08-19 | Cloud9        | L   | 0.198      | -            | -                | -                | -         |    -3.65 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3345 | 2024-08-19 | PARIVISION    | W   | 0.198      | 0.143        | 0.024 (0.001)    | 0.249 (0.007)    | 0 (0.000) |     1.41 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3808 | 2024-08-04 | Astralis      | L   | 0.097      | -            | -                | -                | -         |    -0.75 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3832 | 2024-08-03 | G2            | L   | 0.092      | -            | -                | -                | -         |    -0.02 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3870 | 2024-08-02 | FaZe          | W   | 0.085      | 0.581        | 1.000 (0.049)    | 0.553 (0.027)    | 1 (0.085) |     2.65 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3914 | 2024-08-01 | Cloud9        | W   | 0.078      | 0.581        | 0.076 (0.003)    | 0.343 (0.016)    | 1 (0.078) |     1.02 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3966 | 2024-07-31 | G2            | L   | 0.071      | -            | -                | -                | -         |    -0.02 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,086.33)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.765 | $1,500.00      | $1,147.30       |
| 2024-11-09 |      0.745 | $11,635.00     | $8,673.23       |
| 2024-10-20 |      0.612 | $5,000.00      | $3,060.80       |
| 2024-09-22 |      0.426 | $7,000.00      | $2,980.86       |
| 2024-08-25 |      0.239 | $5,000.00      | $1,195.17       |
| 2024-08-04 |      0.098 | $10,500.00     | $1,028.98       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
