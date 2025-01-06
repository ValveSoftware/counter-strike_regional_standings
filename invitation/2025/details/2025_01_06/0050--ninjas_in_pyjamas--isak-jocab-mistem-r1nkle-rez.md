### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [50](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [36]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1120.7<br />
<br />
Final Rank Value (1120.7) = Starting Rank Value (1126.3) + Head To Head Adjustments (-5.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.475[<sup>1</sup>](#table2)
- Bounty Collected: 0.431[<sup>2</sup>](#table1)
- Opponent Network: 0.096[<sup>2</sup>](#table1)
- LAN Wins: 0.468[<sup>2</sup>](#table1)

The average of these factors is 0.367<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1126.3
- 400 + ( ( 0.367 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1126.3


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
|           33 |      554 | 2024-11-24 | Spirit        | L   | 0.913      | -            | -                | -                | -         |    -0.34 | isak, jocab, MisteM, r1nkle, REZ |
|           32 |      561 | 2024-11-23 | 9 Pandas      | W   | 0.910      | 0.143        | 0.108 (0.014)    | 0.754 (0.098)    | 1 (0.910) |    18.17 | isak, jocab, MisteM, r1nkle, REZ |
|           31 |      587 | 2024-11-23 | TSM           | W   | 0.904      | 0.143        | 0.035 (0.005)    | 0.460 (0.059)    | 1 (0.904) |     7.49 | isak, jocab, MisteM, r1nkle, REZ |
|           30 |      619 | 2024-11-21 | HEROIC        | L   | 0.897      | -            | -                | -                | -         |    -1.02 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |      635 | 2024-11-21 | PARIVISION    | W   | 0.892      | 0.143        | 0.025 (0.003)    | 0.281 (0.036)    | 1 (0.892) |     9.08 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      647 | 2024-11-20 | G2            | L   | 0.890      | -            | -                | -                | -         |    -0.17 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      847 | 2024-11-12 | BetBoom       | L   | 0.833      | -            | -                | -                | -         |   -11.90 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      878 | 2024-11-11 | Zero Tenacity | W   | 0.828      | 0.384        | 0.081 (0.026)    | 0.599 (0.190)    | 0 (0.000) |    12.33 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      918 | 2024-11-09 | Metizport     | L   | 0.814      | -            | -                | -                | -         |    -6.92 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      939 | 2024-11-08 | Alliance      | W   | 0.807      | 0.432        | 0.035 (0.012)    | 0.395 (0.138)    | 1 (0.807) |     6.88 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |     1218 | 2024-10-25 | Imperial      | L   | 0.714      | -            | -                | -                | -         |    -8.73 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |     1246 | 2024-10-23 | HEROIC        | L   | 0.702      | -            | -                | -                | -         |    -0.68 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1248 | 2024-10-23 | Imperial      | W   | 0.700      | 0.477        | 0.158 (0.053)    | 0.451 (0.151)    | 0 (0.000) |    13.54 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1393 | 2024-10-16 | JANO          | L   | 0.654      | -            | -                | -                | -         |   -16.58 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1406 | 2024-10-16 | B8            | L   | 0.652      | -            | -                | -                | -         |    -8.26 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1686 | 2024-10-04 | ECSTATIC      | L   | 0.572      | -            | -                | -                | -         |   -11.73 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     2573 | 2024-09-07 | HEROIC        | L   | 0.394      | -            | -                | -                | -         |    -0.42 | alex, isak, maxster, r1nkle, REZ |
|           16 |     2624 | 2024-09-05 | FaZe          | L   | 0.381      | -            | -                | -                | -         |    -0.17 | alex, isak, maxster, r1nkle, REZ |
|           15 |     2673 | 2024-09-04 | Natus Vincere | L   | 0.374      | -            | -                | -                | -         |    -0.29 | alex, isak, maxster, r1nkle, REZ |
|           14 |     2707 | 2024-09-03 | HEROIC        | W   | 0.367      | 0.889        | 0.822 (0.268)    | 0.603 (0.197)    | 1 (0.367) |    11.22 | alex, isak, maxster, r1nkle, REZ |
|           13 |     2814 | 2024-08-29 | Monte         | L   | 0.335      | -            | -                | -                | -         |    -6.48 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2825 | 2024-08-29 | GUN5          | L   | 0.333      | -            | -                | -                | -         |    -5.91 | alex, isak, maxster, r1nkle, REZ |
|           11 |     3170 | 2024-08-21 | AMKAL         | L   | 0.281      | -            | -                | -                | -         |    -7.30 | alex, isak, maxster, r1nkle, REZ |
|           10 |     3270 | 2024-08-19 | Cloud9        | L   | 0.267      | -            | -                | -                | -         |    -5.10 | alex, isak, maxster, r1nkle, REZ |
|            9 |     3277 | 2024-08-19 | PARIVISION    | W   | 0.267      | -            | -                | -                | 0 (0.000) |     1.99 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3740 | 2024-08-04 | Astralis      | L   | 0.166      | -            | -                | -                | -         |    -1.30 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3764 | 2024-08-03 | G2            | L   | 0.161      | -            | -                | -                | -         |    -0.04 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3802 | 2024-08-02 | FaZe          | W   | 0.154      | 0.581        | 0.920 (0.082)    | 0.498 (0.044)    | 1 (0.154) |     4.77 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3846 | 2024-08-01 | Cloud9        | W   | 0.146      | 0.581        | 0.075 (0.006)    | 0.363 (0.031)    | 1 (0.146) |     1.83 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3898 | 2024-07-31 | G2            | L   | 0.140      | -            | -                | -                | -         |    -0.03 | alex, isak, maxster, r1nkle, REZ |
|            3 |     4252 | 2024-07-20 | Passion UA    | L   | 0.067      | -            | -                | -                | -         |    -0.81 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4326 | 2024-07-18 | MOUZ NXT      | W   | 0.054      | -            | -                | -                | -         |     0.16 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4458 | 2024-07-16 | Nexus         | W   | 0.041      | 0.500        | 0.372 (0.008)    | 0.763 (0.016)    | -         |     1.13 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($20,873.55)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.833 | $1,500.00      | $1,250.19       |
| 2024-11-09 |      0.814 | $11,635.00     | $9,471.29       |
| 2024-10-20 |      0.681 | $5,000.00      | $3,403.76       |
| 2024-09-22 |      0.494 | $7,000.00      | $3,461.00       |
| 2024-08-25 |      0.308 | $5,000.00      | $1,538.13       |
| 2024-08-04 |      0.167 | $10,500.00     | $1,749.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
