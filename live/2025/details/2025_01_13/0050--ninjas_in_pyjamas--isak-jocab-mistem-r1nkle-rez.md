### Roster Details<br />
Team Name: Ninjas in Pyjamas<br />
Roster: isak, jocab, MisteM, r1nkle, REZ<br />
Global Rank: [50](../../standings_global_2025_01_13.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_13.md)<br />
Regional Rank: [35]( ../../standings_europe_2025_01_13.md)<br />
<br />
Final Rank Value:  1112.0<br />
<br />
Final Rank Value (1112.0) = Starting Rank Value (1114.7) + Head To Head Adjustments (-2.8)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.477[<sup>1</sup>](#table2)
- Bounty Collected: 0.423[<sup>2</sup>](#table1)
- Opponent Network: 0.086[<sup>2</sup>](#table1)
- LAN Wins: 0.455[<sup>2</sup>](#table1)

The average of these factors is 0.360<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1114.7
- 400 + ( ( 0.360 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 1114.7


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
|           32 |      595 | 2024-11-24 | Spirit        | L   | 0.866      | -            | -                | -                | -         |    -0.29 | isak, jocab, MisteM, r1nkle, REZ |
|           31 |      602 | 2024-11-23 | 9 Pandas      | W   | 0.864      | 0.143        | 0.156 (0.019)    | 0.797 (0.098)    | 1 (0.864) |    17.48 | isak, jocab, MisteM, r1nkle, REZ |
|           30 |      628 | 2024-11-23 | TSM           | W   | 0.858      | 0.143        | 0.035 (0.004)    | 0.425 (0.052)    | 1 (0.858) |     6.99 | isak, jocab, MisteM, r1nkle, REZ |
|           29 |      660 | 2024-11-21 | HEROIC        | L   | 0.851      | -            | -                | -                | -         |    -0.87 | isak, jocab, MisteM, r1nkle, REZ |
|           28 |      676 | 2024-11-21 | PARIVISION    | W   | 0.845      | 0.143        | 0.025 (0.003)    | 0.262 (0.032)    | 1 (0.845) |     8.20 | isak, jocab, MisteM, r1nkle, REZ |
|           27 |      688 | 2024-11-20 | G2            | L   | 0.844      | -            | -                | -                | -         |    -0.17 | isak, jocab, MisteM, r1nkle, REZ |
|           26 |      888 | 2024-11-12 | BetBoom       | L   | 0.786      | -            | -                | -                | -         |   -11.24 | isak, jocab, MisteM, r1nkle, REZ |
|           25 |      919 | 2024-11-11 | Zero Tenacity | W   | 0.781      | 0.384        | 0.084 (0.025)    | 0.622 (0.187)    | 0 (0.000) |    11.72 | isak, jocab, MisteM, r1nkle, REZ |
|           24 |      959 | 2024-11-09 | Metizport     | L   | 0.768      | -            | -                | -                | -         |    -5.99 | isak, jocab, MisteM, r1nkle, REZ |
|           23 |      980 | 2024-11-08 | Alliance      | W   | 0.761      | 0.432        | 0.037 (0.012)    | 0.387 (0.127)    | 1 (0.761) |     7.00 | isak, jocab, MisteM, r1nkle, REZ |
|           22 |     1259 | 2024-10-25 | Imperial      | L   | 0.667      | -            | -                | -                | -         |    -8.00 | isak, jocab, MisteM, r1nkle, REZ |
|           21 |     1287 | 2024-10-23 | HEROIC        | L   | 0.655      | -            | -                | -                | -         |    -0.56 | isak, jocab, MisteM, r1nkle, REZ |
|           20 |     1289 | 2024-10-23 | Imperial      | W   | 0.654      | 0.477        | 0.165 (0.051)    | 0.437 (0.136)    | 0 (0.000) |    12.84 | isak, jocab, MisteM, r1nkle, REZ |
|           19 |     1434 | 2024-10-16 | JANO          | L   | 0.608      | -            | -                | -                | -         |   -15.34 | isak, jocab, MisteM, r1nkle, REZ |
|           18 |     1447 | 2024-10-16 | B8            | L   | 0.606      | -            | -                | -                | -         |    -7.61 | isak, jocab, MisteM, r1nkle, REZ |
|           17 |     1727 | 2024-10-04 | ECSTATIC      | L   | 0.526      | -            | -                | -                | -         |   -10.56 | isak, jocab, MisteM, r1nkle, REZ |
|           16 |     2614 | 2024-09-07 | HEROIC        | L   | 0.347      | -            | -                | -                | -         |    -0.33 | alex, isak, maxster, r1nkle, REZ |
|           15 |     2665 | 2024-09-05 | FaZe          | L   | 0.335      | -            | -                | -                | -         |    -0.13 | alex, isak, maxster, r1nkle, REZ |
|           14 |     2714 | 2024-09-04 | Natus Vincere | L   | 0.328      | -            | -                | -                | -         |    -0.26 | alex, isak, maxster, r1nkle, REZ |
|           13 |     2748 | 2024-09-03 | HEROIC        | W   | 0.321      | 0.889        | 0.873 (0.249)    | 0.599 (0.171)    | 1 (0.321) |     9.84 | alex, isak, maxster, r1nkle, REZ |
|           12 |     2855 | 2024-08-29 | Monte         | L   | 0.288      | -            | -                | -                | -         |    -5.49 | alex, isak, maxster, r1nkle, REZ |
|           11 |     2866 | 2024-08-29 | GUN5          | L   | 0.287      | -            | -                | -                | -         |    -4.84 | alex, isak, maxster, r1nkle, REZ |
|           10 |     3211 | 2024-08-21 | AMKAL         | L   | 0.235      | -            | -                | -                | -         |    -6.06 | alex, isak, maxster, r1nkle, REZ |
|            9 |     3311 | 2024-08-19 | Cloud9        | L   | 0.221      | -            | -                | -                | -         |    -4.12 | alex, isak, maxster, r1nkle, REZ |
|            8 |     3318 | 2024-08-19 | PARIVISION    | W   | 0.220      | 0.143        | 0.025 (0.001)    | 0.262 (0.008)    | 0 (0.000) |     1.58 | alex, isak, maxster, r1nkle, REZ |
|            7 |     3781 | 2024-08-04 | Astralis      | L   | 0.120      | -            | -                | -                | -         |    -0.94 | alex, isak, maxster, r1nkle, REZ |
|            6 |     3805 | 2024-08-03 | G2            | L   | 0.114      | -            | -                | -                | -         |    -0.03 | alex, isak, maxster, r1nkle, REZ |
|            5 |     3843 | 2024-08-02 | FaZe          | W   | 0.107      | 0.581        | 0.995 (0.062)    | 0.502 (0.031)    | 1 (0.107) |     3.34 | alex, isak, maxster, r1nkle, REZ |
|            4 |     3887 | 2024-08-01 | Cloud9        | W   | 0.100      | 0.581        | 0.077 (0.004)    | 0.349 (0.020)    | 1 (0.100) |     1.29 | alex, isak, maxster, r1nkle, REZ |
|            3 |     3939 | 2024-07-31 | G2            | L   | 0.093      | -            | -                | -                | -         |    -0.02 | alex, isak, maxster, r1nkle, REZ |
|            2 |     4293 | 2024-07-20 | Passion UA    | L   | 0.020      | -            | -                | -                | -         |    -0.24 | alex, isak, maxster, r1nkle, REZ |
|            1 |     4367 | 2024-07-18 | MOUZ NXT      | W   | 0.008      | -            | -                | -                | -         |     0.02 | alex, isak, maxster, r1nkle, REZ |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($18,995.00)
- Divide that value by the 5th highest value among all rosters ($236,439.49)
- The final value (0.08) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-12 |      0.787 | $1,500.00      | $1,180.84       |
| 2024-11-09 |      0.768 | $11,635.00     | $8,933.41       |
| 2024-10-20 |      0.635 | $5,000.00      | $3,172.61       |
| 2024-09-22 |      0.448 | $7,000.00      | $3,137.39       |
| 2024-08-25 |      0.261 | $5,000.00      | $1,306.98       |
| 2024-08-04 |      0.120 | $10,500.00     | $1,263.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
