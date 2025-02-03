### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [53](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [37]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  1033.0<br />
<br />
Final Rank Value (1033.0) = Starting Rank Value (1020.9) + Head To Head Adjustments (12.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.466[<sup>1</sup>](#table2)
- Bounty Collected: 0.381[<sup>2</sup>](#table1)
- Opponent Network: 0.064[<sup>2</sup>](#table1)
- LAN Wins: 0.369[<sup>2</sup>](#table1)

The average of these factors is 0.320<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1020.9
- 400 + ( ( 0.320 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 1020.9


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
|           25 |      929 | 2024-11-24 | Spirit        | L   | 0.725      | -            | -                | -                | -         |    -0.14 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      936 | 2024-11-23 | 9 Pandas      | W   | 0.723      | 0.143        | 0.167 (0.017)    | 0.865 (0.089)    | 1 (0.723) |    15.39 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |      962 | 2024-11-23 | TSM           | W   | 0.717      | 0.143        | 0.030 (0.003)    | 0.329 (0.034)    | 1 (0.717) |     6.10 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |      994 | 2024-11-21 | Falcons       | L   | 0.710      | -            | -                | -                | -         |    -0.59 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1010 | 2024-11-21 | PARIVISION    | W   | 0.705      | 0.143        | 0.018 (0.002)    | 0.303 (0.030)    | 1 (0.705) |     6.63 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1022 | 2024-11-20 | G2            | L   | 0.703      | -            | -                | -                | -         |    -0.09 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1222 | 2024-11-12 | BetBoom       | L   | 0.646      | -            | -                | -                | -         |    -7.47 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1253 | 2024-11-11 | Zero Tenacity | W   | 0.640      | 0.384        | 0.078 (0.019)    | 0.715 (0.176)    | 0 (0.000) |    10.62 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1293 | 2024-11-09 | Metizport     | L   | 0.627      | -            | -                | -                | -         |    -4.17 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     1314 | 2024-11-08 | Alliance      | W   | 0.620      | 0.432        | 0.038 (0.010)    | 0.404 (0.108)    | 1 (0.620) |     7.62 | isak, jocab, MisteM, r1nkle, REZ |
|           15 |     1593 | 2024-10-25 | Imperial      | L   | 0.526      | -            | -                | -                | -         |    -6.08 | isak, jocab, MisteM, r1nkle, REZ |
|           14 |     1621 | 2024-10-23 | Falcons       | L   | 0.514      | -            | -                | -                | -         |    -0.36 | isak, jocab, MisteM, r1nkle, REZ |
|           13 |     1623 | 2024-10-23 | Imperial      | W   | 0.513      | 0.477        | 0.158 (0.039)    | 0.395 (0.097)    | 0 (0.000) |    10.34 | isak, jocab, MisteM, r1nkle, REZ |
|           12 |     1768 | 2024-10-16 | JANO          | L   | 0.467      | -            | -                | -                | -         |   -11.27 | isak, jocab, MisteM, r1nkle, REZ |
|           11 |     1781 | 2024-10-16 | B8            | L   | 0.465      | -            | -                | -                | -         |    -4.99 | isak, jocab, MisteM, r1nkle, REZ |
|           10 |     2061 | 2024-10-04 | ECSTATIC      | L   | 0.385      | -            | -                | -                | -         |    -7.13 | isak, jocab, MisteM, r1nkle, REZ |
|            9 |     2948 | 2024-09-07 | Falcons       | L   | 0.206      | -            | -                | -                | -         |    -0.16 | alex, isak, maxster, r1nkle, REZ |
|            8 |     2999 | 2024-09-05 | FaZe          | L   | 0.194      | -            | -                | -                | -         |    -0.05 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3048 | 2024-09-04 | Natus Vincere | L   | 0.187      | -            | -                | -                | -         |    -0.09 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3082 | 2024-09-03 | Falcons       | W   | 0.180      | 0.889        | 0.923 (0.148)    | 0.627 (0.100)    | 1 (0.180) |     5.54 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3189 | 2024-08-29 | Monte         | L   | 0.147      | -            | -                | -                | -         |    -2.37 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3200 | 2024-08-29 | GUN5          | L   | 0.146      | -            | -                | -                | -         |    -2.14 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3545 | 2024-08-21 | AMKAL         | L   | 0.094      | -            | -                | -                | -         |    -2.26 | alex, isak, maxster, r1nkle, REZ |
|            2 |     3645 | 2024-08-19 | Cloud9        | L   | 0.080      | -            | -                | -                | -         |    -1.37 | alex, isak, maxster, r1nkle, REZ |
|            1 |     3652 | 2024-08-19 | PARIVISION    | W   | 0.080      | 0.143        | 0.018 (0.000)    | 0.303 (0.003)    | 0 (0.000) |     0.63 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($13,484.97)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.07) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.646 | $1,500.00      | $969.48         |
| 2024-11-09 |      0.627 | $11,635.00     | $7,293.94       |
| 2024-10-20 |      0.494 | $5,000.00      | $2,468.07       |
| 2024-09-22 |      0.307 | $7,000.00      | $2,151.03       |
| 2024-08-25 |      0.120 | $5,000.00      | $602.44         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
