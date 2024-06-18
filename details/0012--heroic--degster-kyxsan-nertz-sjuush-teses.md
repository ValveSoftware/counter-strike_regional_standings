### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [12](../standings_global.md)<br />
Regional Rank: [10]( ../standings_europe.md)<br />
Final Rank Value:  1698.1<br />
<br />
Final Rank Value (1698.1) = Starting Rank Value (1791.2) + Head To Head Adjustments (-93.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.689[<sup>1</sup>](#table2)
- Bounty Collected: 0.645[<sup>2</sup>](#table1)
- Opponent Network: 0.418[<sup>2</sup>](#table1)
- LAN Wins: 0.987[<sup>2</sup>](#table1)

The average of these factors is 0.685<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1791.2
- 400 + ( ( 0.685 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1791.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                 |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           59 |      438 | 2024-06-06 | ENCE              | W   | 1.000      | 0.715        | 0.229 (0.163)    | 0.424 (0.303)    | 1 (1.000) |     4.28 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           58 |      455 | 2024-06-06 | Sashi             | W   | 1.000      | 0.715        | 0.200 (0.143)    | 1.000 (0.715)    | 1 (1.000) |     2.89 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           57 |      463 | 2024-06-06 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |    -9.04 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           56 |      491 | 2024-06-05 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -21.25 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           55 |      514 | 2024-06-05 | Astralis          | L   | 1.000      | -            | -                | -                | -         |    -8.93 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           54 |      648 | 2024-05-31 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -6.80 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           53 |      693 | 2024-05-29 | BIG               | W   | 1.000      | 0.624        | 0.225 (0.140)    | 0.433 (0.270)    | 1 (1.000) |     5.23 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           52 |      705 | 2024-05-29 | Natus Vincere     | W   | 1.000      | 0.624        | 1.000 (0.624)    | -                | 1 (1.000) |    23.03 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           51 |      725 | 2024-05-28 | M80               | W   | 1.000      | 0.624        | -                | 0.666 (0.416)    | 1 (1.000) |     2.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           50 |      741 | 2024-05-27 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -14.77 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           49 |      992 | 2024-05-18 | MOUZ              | L   | 0.995      | -            | -                | -                | -         |    -4.61 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           48 |     1025 | 2024-05-17 | MIBR              | W   | 0.989      | 0.769        | 0.281 (0.214)    | 0.688 (0.523)    | 1 (0.989) |    10.97 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           47 |     1065 | 2024-05-16 | Spirit            | L   | 0.982      | -            | -                | -                | -         |    -5.19 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           46 |     1115 | 2024-05-15 | MIBR              | W   | 0.975      | 0.769        | 0.281 (0.211)    | 0.688 (0.516)    | 1 (0.975) |    11.06 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           45 |     1383 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.902      | -            | -                | -                | -         |   -17.55 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           44 |     1396 | 2024-05-03 | BIG               | L   | 0.896      | -            | -                | -                | -         |   -24.46 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           43 |     1408 | 2024-05-03 | FlyQuest          | W   | 0.894      | 0.889        | -                | 0.476 (0.378)    | 1 (0.894) |     3.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           42 |     1426 | 2024-05-02 | Complexity        | L   | 0.889      | -            | -                | -                | -         |   -13.21 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           41 |     1472 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.875      | 0.889        | 0.315 (0.245)    | 0.497 (0.387)    | 1 (0.875) |    10.13 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           40 |     2000 | 2024-04-10 | G2                | L   | 0.741      | -            | -                | -                | -         |    -6.96 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |     2057 | 2024-04-09 | FURIA             | W   | 0.735      | -            | -                | -                | 1 (0.735) |     6.96 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |     2091 | 2024-04-08 | 9z                | W   | 0.727      | 0.624        | 0.525 (0.238)    | 0.749 (0.340)    | -         |     7.76 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |     2101 | 2024-04-07 | Liquid            | L   | 0.725      | -            | -                | -                | -         |   -15.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     2407 | 2024-03-23 | paiN              | L   | 0.623      | -            | -                | -                | -         |   -13.91 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     2429 | 2024-03-22 | Virtus.pro        | L   | 0.614      | -            | -                | -                | -         |    -9.73 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |     2441 | 2024-03-21 | Complexity        | L   | 0.609      | -            | -                | -                | -         |    -9.91 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |     2449 | 2024-03-21 | FaZe              | W   | 0.608      | 1.000        | 1.000 (0.608)    | 0.540 (0.329)    | -         |    13.99 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     2498 | 2024-03-18 | Eternal Fire      | W   | 0.588      | -            | -                | -                | -         |    10.44 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     2519 | 2024-03-17 | Imperial          | W   | 0.583      | -            | -                | -                | -         |     3.96 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2529 | 2024-03-17 | Lynn Vision       | W   | 0.581      | -            | -                | -                | -         |     0.64 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2629 | 2024-03-13 | Metizport         | W   | 0.555      | -            | -                | -                | -         |     0.32 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2654 | 2024-03-12 | Virtus.pro        | L   | 0.550      | -            | -                | -                | -         |    -8.43 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2671 | 2024-03-11 | ENCE              | W   | 0.543      | -            | -                | -                | -         |     4.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2683 | 2024-03-11 | ex-Preasy         | W   | 0.542      | -            | -                | -                | -         |     0.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2724 | 2024-03-09 | OG                | L   | 0.528      | -            | -                | -                | -         |   -16.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2800 | 2024-03-06 | Young Ninjas      | W   | 0.509      | -            | -                | -                | -         |     0.09 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     3081 | 2024-02-22 | GamerLegion       | W   | 0.422      | -            | -                | -                | -         |     0.28 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     3102 | 2024-02-21 | Spirit            | L   | 0.416      | -            | -                | -                | -         |    -3.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     3139 | 2024-02-20 | Astralis          | W   | 0.408      | -            | -                | -                | -         |     8.57 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     3153 | 2024-02-19 | Vitality          | L   | 0.403      | -            | -                | -                | -         |    -3.26 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     3161 | 2024-02-19 | ex-Preasy         | W   | 0.402      | -            | -                | -                | -         |     0.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     3404 | 2024-02-06 | G2                | L   | 0.316      | -            | -                | -                | -         |    -3.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3411 | 2024-02-06 | GamerLegion       | W   | 0.315      | -            | -                | -                | -         |     0.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3418 | 2024-02-05 | Vitality          | W   | 0.308      | 1.000        | 0.738 (0.227)    | -                | -         |     7.30 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3469 | 2024-02-03 | G2                | L   | 0.295      | -            | -                | -                | -         |    -2.74 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3539 | 2024-01-31 | BIG               | W   | 0.277      | -            | -                | -                | -         |     1.18 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3549 | 2024-01-31 | Astralis          | W   | 0.275      | -            | -                | -                | -         |     6.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3633 | 2024-01-25 | BIG               | L   | 0.237      | -            | -                | -                | -         |    -6.51 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3648 | 2024-01-24 | Cloud9            | L   | 0.230      | -            | -                | -                | -         |    -6.71 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3756 | 2024-01-20 | ex-sYnck          | W   | 0.203      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3776 | 2024-01-20 | IKLA              | W   | 0.201      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3821 | 2024-01-19 | KOI               | L   | 0.195      | -            | -                | -                | -         |    -5.95 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3876 | 2024-01-18 | MOUZ              | L   | 0.189      | -            | -                | -                | -         |    -1.41 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3884 | 2024-01-18 | FORZE             | W   | 0.189      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     4147 | 2024-01-11 | SINNERS           | W   | 0.144      | -            | -                | -                | -         |     0.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     4151 | 2024-01-11 | IKLA              | W   | 0.143      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     4164 | 2024-01-11 | ex-sYnck          | W   | 0.142      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     4170 | 2024-01-11 | HAVU              | W   | 0.142      | -            | -                | -                | -         |     0.01 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     4190 | 2024-01-10 | GUN5              | W   | 0.136      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($106,505.56)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.35) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      1.000 | $8,000.00      | $8,000.00       |
| 2024-06-02 |      1.000 | $10,000.00     | $10,000.00      |
| 2024-05-19 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      0.956 | $7,000.00      | $6,688.70       |
| 2024-04-14 |      0.767 | $6,000.00      | $4,604.43       |
| 2024-03-31 |      0.676 | $20,000.00     | $13,526.23      |
| 2024-03-10 |      0.537 | $7,500.00      | $4,024.99       |
| 2024-02-11 |      0.349 | $24,000.00     | $8,381.25       |
| 2024-01-28 |      0.256 | $5,000.00      | $1,279.95       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
