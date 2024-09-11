### Roster Details<br />
Team Name: KOI<br />
Roster: adamS, dav1g, JUST, mopoz, stadodo<br />
Global Rank: [77](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [55]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  924.5<br />
<br />
Final Rank Value (924.5) = Starting Rank Value (951.0) + Head To Head Adjustments (-26.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.439[<sup>1</sup>](#table2)
- Bounty Collected: 0.396[<sup>2</sup>](#table1)
- Opponent Network: 0.173[<sup>2</sup>](#table1)
- LAN Wins: 0.127[<sup>2</sup>](#table1)

The average of these factors is 0.284<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 951.0
- 400 + ( ( 0.284 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 951.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           43 |      126 | 2024-09-06 | Wildcard          | L   | 1.000      | -            | -                | -                | -         |    -5.94 | adamS, dav1g, JUST, mopoz, stadodo |
|           42 |      182 | 2024-09-05 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -0.56 | adamS, dav1g, JUST, mopoz, stadodo |
|           41 |      231 | 2024-09-03 | G2                | L   | 1.000      | -            | -                | -                | -         |    -0.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           40 |      635 | 2024-08-23 | TSM               | L   | 1.000      | -            | -                | -                | -         |   -10.35 | adamS, dav1g, JUST, mopoz, stadodo |
|           39 |      642 | 2024-08-23 | UNiTY             | L   | 1.000      | -            | -                | -                | -         |   -16.09 | adamS, dav1g, JUST, mopoz, stadodo |
|           38 |      677 | 2024-08-22 | SINNERS           | L   | 1.000      | -            | -                | -                | -         |    -9.05 | adamS, dav1g, JUST, mopoz, stadodo |
|           37 |      710 | 2024-08-21 | Monte             | W   | 1.000      | 0.143        | 0.024 (0.003)    | 0.683 (0.098)    | 0 (0.000) |    18.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           36 |      758 | 2024-08-21 | ENCE              | W   | 1.000      | 0.143        | 0.129 (0.018)    | 0.316 (0.045)    | 0 (0.000) |    24.55 | adamS, dav1g, JUST, mopoz, stadodo |
|           35 |      801 | 2024-08-19 | Monte             | L   | 1.000      | -            | -                | -                | -         |   -12.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           34 |      808 | 2024-08-19 | Gaimin Gladiators | W   | 1.000      | 0.143        | 0.016 (0.002)    | 0.477 (0.068)    | 0 (0.000) |    13.25 | adamS, dav1g, JUST, mopoz, stadodo |
|           33 |      905 | 2024-08-15 | HOTU              | L   | 1.000      | -            | -                | -                | -         |   -23.63 | adamS, dav1g, JUST, mopoz, stadodo |
|           32 |      955 | 2024-08-13 | B8                | L   | 1.000      | -            | -                | -                | -         |    -9.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           31 |     1009 | 2024-08-12 | 9 Pandas          | L   | 1.000      | -            | -                | -                | -         |    -9.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           30 |     1197 | 2024-08-06 | Sashi             | L   | 0.961      | -            | -                | -                | -         |   -11.01 | adamS, dav1g, JUST, mopoz, stadodo |
|           29 |     1419 | 2024-07-31 | Zero Tenacity     | L   | 0.920      | -            | -                | -                | -         |    -9.22 | adamS, dav1g, JUST, mopoz, stadodo |
|           28 |     1580 | 2024-07-26 | EYEBALLERS        | W   | 0.886      | 0.500        | -                | 0.543 (0.241)    | 0 (0.000) |     6.23 | adamS, dav1g, JUST, mopoz, stadodo |
|           27 |     1850 | 2024-07-18 | Monte             | L   | 0.834      | -            | -                | -                | -         |   -15.36 | adamS, dav1g, JUST, mopoz, stadodo |
|           26 |     1991 | 2024-07-16 | Insilio           | W   | 0.820      | 0.500        | 0.023 (0.009)    | 0.706 (0.290)    | 0 (0.000) |    11.02 | adamS, dav1g, JUST, mopoz, stadodo |
|           25 |     2258 | 2024-06-16 | 9z                | L   | 0.620      | -            | -                | -                | -         |    -1.52 | adamS, dav1g, JUST, mopoz, stadodo |
|           24 |     2310 | 2024-06-14 | RED Canids        | W   | 0.609      | 0.548        | 0.048 (0.016)    | 0.609 (0.204)    | 1 (0.609) |    11.60 | adamS, dav1g, JUST, mopoz, stadodo |
|           23 |     2313 | 2024-06-14 | Imperial          | W   | 0.608      | 0.548        | 0.145 (0.048)    | 0.619 (0.206)    | 1 (0.608) |    14.54 | adamS, dav1g, JUST, mopoz, stadodo |
|           22 |     2470 | 2024-06-09 | Sangal            | L   | 0.574      | -            | -                | -                | -         |    -2.24 | adamS, dav1g, JUST, mopoz, stadodo |
|           21 |     2664 | 2024-06-06 | SINNERS           | W   | 0.554      | 0.500        | 0.092 (0.026)    | 1.000 (0.277)    | 0 (0.000) |    11.22 | adamS, dav1g, JUST, mopoz, stadodo |
|           20 |     2726 | 2024-06-05 | 3DMAX             | W   | 0.547      | 0.500        | 0.512 (0.140)    | 0.913 (0.250)    | 0 (0.000) |    16.88 | adamS, dav1g, JUST, mopoz, stadodo |
|           19 |     2858 | 2024-06-01 | ENCE              | L   | 0.520      | -            | -                | -                | -         |    -3.10 | adamS, dav1g, JUST, mopoz, stadodo |
|           18 |     2866 | 2024-06-01 | Zero Tenacity     | L   | 0.519      | -            | -                | -                | -         |    -5.13 | adamS, dav1g, JUST, mopoz, stadodo |
|           17 |     3533 | 2024-05-09 | B8                | L   | 0.365      | -            | -                | -                | -         |    -3.85 | adamS, dav1g, JUST, mopoz, stadodo |
|           16 |     3695 | 2024-05-01 | Zero Tenacity     | L   | 0.312      | -            | -                | -                | -         |    -3.51 | adamS, dav1g, JUST, mopoz, stadodo |
|           15 |     4015 | 2024-04-18 | ex-Guild Eagles   | L   | 0.227      | -            | -                | -                | -         |    -5.50 | adamS, dav1g, JUST, mopoz, stadodo |
|           14 |     4024 | 2024-04-18 | fnatic            | W   | 0.226      | 0.143        | 0.294 (0.010)    | -                | 0 (0.000) |     6.53 | adamS, dav1g, JUST, mopoz, stadodo |
|           13 |     4094 | 2024-04-16 | BLEED             | L   | 0.214      | -            | -                | -                | -         |    -4.33 | adamS, dav1g, JUST, mopoz, stadodo |
|           12 |     4227 | 2024-04-10 | RUSH B            | W   | 0.174      | -            | -                | -                | -         |     1.98 | adamS, dav1g, JUST, mopoz, stadodo |
|           11 |     4281 | 2024-04-09 | Aurora            | W   | 0.167      | 0.500        | 0.282 (0.024)    | 0.571 (0.048)    | -         |     4.88 | adamS, dav1g, JUST, mopoz, stadodo |
|           10 |     4287 | 2024-04-09 | Apeks             | L   | 0.167      | -            | -                | -                | -         |    -3.94 | adamS, dav1g, JUST, mopoz, stadodo |
|            9 |     4315 | 2024-04-08 | GUN5              | W   | 0.160      | -            | -                | -                | -         |     0.22 | adamS, dav1g, JUST, mopoz, stadodo |
|            8 |     4320 | 2024-04-08 | fnatic            | L   | 0.159      | -            | -                | -                | -         |    -0.41 | adamS, dav1g, JUST, mopoz, stadodo |
|            7 |     4421 | 2024-04-04 | NOM               | W   | 0.133      | -            | -                | -                | -         |     0.39 | adamS, dav1g, JUST, mopoz, stadodo |
|            6 |     4455 | 2024-04-03 | 9INE              | W   | 0.127      | -            | -                | -                | -         |     0.32 | adamS, dav1g, JUST, mopoz, stadodo |
|            5 |     4492 | 2024-04-02 | TSM               | W   | 0.121      | -            | -                | -                | -         |     0.55 | adamS, dav1g, JUST, mopoz, stadodo |
|            4 |     4558 | 2024-03-28 | EYEBALLERS        | L   | 0.086      | -            | -                | -                | -         |    -2.10 | adamS, dav1g, JUST, mopoz, stadodo |
|            3 |     4730 | 2024-03-18 | FURIA             | L   | 0.020      | -            | -                | -                | -         |    -0.01 | adamS, dav1g, JUST, mopoz, stadodo |
|            2 |     4747 | 2024-03-17 | ENCE              | L   | 0.014      | -            | -                | -                | -         |    -0.08 | adamS, dav1g, JUST, mopoz, stadodo |
|            1 |     4762 | 2024-03-17 | SAW               | L   | 0.013      | -            | -                | -                | -         |    -0.01 | adamS, dav1g, JUST, mopoz, stadodo |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($15,581.44)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-09-11 |      1.000 | $3,500.00      | $3,500.00       |
| 2024-09-11 |      1.000 | $500.00        | $500.00         |
| 2024-06-16 |      0.622 | $7,000.00      | $4,355.43       |
| 2024-06-09 |      0.574 | $12,000.00     | $6,888.40       |
| 2024-03-20 |      0.034 | $10,000.00     | $337.61         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
