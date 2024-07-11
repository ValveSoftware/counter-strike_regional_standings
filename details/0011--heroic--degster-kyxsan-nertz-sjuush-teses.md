### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1704.7<br />
<br />
Final Rank Value (1704.7) = Starting Rank Value (1773.9) + Head To Head Adjustments (-69.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.680[<sup>1</sup>](#table2)
- Bounty Collected: 0.610[<sup>2</sup>](#table1)
- Opponent Network: 0.348[<sup>2</sup>](#table1)
- LAN Wins: 0.968[<sup>2</sup>](#table1)

The average of these factors is 0.651<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1773.9
- 400 + ( ( 0.651 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 1773.9


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
|           54 |      574 | 2024-06-06 | ENCE              | W   | 0.966      | 0.715        | 0.216 (0.149)    | 0.399 (0.276)    | 1 (0.966) |     3.87 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           53 |      591 | 2024-06-06 | Sashi             | W   | 0.965      | 0.715        | 0.202 (0.139)    | 1.000 (0.690)    | 1 (0.965) |     2.44 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           52 |      599 | 2024-06-06 | The MongolZ       | L   | 0.964      | -            | -                | -                | -         |    -7.27 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           51 |      627 | 2024-06-05 | Ninjas in Pyjamas | L   | 0.960      | -            | -                | -                | -         |   -18.13 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           50 |      650 | 2024-06-05 | Astralis          | L   | 0.957      | -            | -                | -                | -         |    -8.39 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           49 |      782 | 2024-05-31 | Vitality          | L   | 0.927      | -            | -                | -                | -         |    -6.32 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           48 |      827 | 2024-05-29 | BIG               | W   | 0.915      | 0.624        | 0.215 (0.123)    | 0.405 (0.231)    | 1 (0.915) |     4.28 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           47 |      839 | 2024-05-29 | Natus Vincere     | W   | 0.913      | 0.624        | 1.000 (0.570)    | -                | 1 (0.913) |    20.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           46 |      859 | 2024-05-28 | M80               | W   | 0.907      | 0.624        | 0.218 (0.123)    | 0.649 (0.367)    | 1 (0.907) |     2.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           45 |      875 | 2024-05-27 | Virtus.pro        | L   | 0.901      | -            | -                | -                | -         |   -13.85 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           44 |     1126 | 2024-05-18 | MOUZ              | L   | 0.840      | -            | -                | -                | -         |    -4.81 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           43 |     1159 | 2024-05-17 | MIBR              | W   | 0.833      | 0.769        | 0.270 (0.173)    | 0.648 (0.415)    | 1 (0.833) |     8.64 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           42 |     1199 | 2024-05-16 | Spirit            | L   | 0.826      | -            | -                | -                | -         |    -4.45 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           41 |     1249 | 2024-05-15 | MIBR              | W   | 0.819      | 0.769        | 0.270 (0.170)    | 0.648 (0.408)    | 1 (0.819) |     8.55 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           40 |     1517 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.747      | -            | -                | -                | -         |   -12.88 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           39 |     1530 | 2024-05-03 | BIG               | L   | 0.741      | -            | -                | -                | -         |   -20.55 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           38 |     1542 | 2024-05-03 | FlyQuest          | W   | 0.739      | 0.889        | -                | 0.417 (0.274)    | 1 (0.739) |     2.26 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           37 |     1560 | 2024-05-02 | Complexity        | L   | 0.733      | -            | -                | -                | -         |   -10.38 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     1606 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.720      | 0.889        | 0.340 (0.218)    | 0.512 (0.327)    | 1 (0.720) |    10.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     2134 | 2024-04-10 | G2                | L   | 0.585      | -            | -                | -                | -         |    -5.59 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |     2191 | 2024-04-09 | FURIA             | W   | 0.579      | -            | -                | -                | 1 (0.579) |     6.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |     2225 | 2024-04-08 | 9z                | W   | 0.572      | 0.624        | 0.586 (0.209)    | 0.749 (0.267)    | -         |     8.21 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     2235 | 2024-04-07 | Liquid            | L   | 0.570      | -            | -                | -                | -         |   -12.71 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     2540 | 2024-03-23 | paiN              | L   | 0.467      | -            | -                | -                | -         |   -10.66 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2562 | 2024-03-22 | Virtus.pro        | L   | 0.458      | -            | -                | -                | -         |    -7.48 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2574 | 2024-03-21 | Complexity        | L   | 0.454      | -            | -                | -                | -         |    -6.75 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2582 | 2024-03-21 | FaZe              | W   | 0.453      | 1.000        | 0.936 (0.423)    | 0.491 (0.222)    | -         |     9.74 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2631 | 2024-03-18 | Eternal Fire      | W   | 0.433      | -            | -                | -                | -         |     6.61 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2652 | 2024-03-17 | Imperial          | W   | 0.427      | -            | -                | -                | -         |     2.52 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2662 | 2024-03-17 | Lynn Vision       | W   | 0.426      | -            | -                | -                | -         |     0.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2762 | 2024-03-13 | Metizport         | W   | 0.399      | -            | -                | -                | -         |     0.19 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     2787 | 2024-03-12 | Virtus.pro        | L   | 0.394      | -            | -                | -                | -         |    -6.31 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     2804 | 2024-03-11 | ENCE              | W   | 0.388      | -            | -                | -                | -         |     2.35 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     2816 | 2024-03-11 | ex-Preasy         | W   | 0.386      | -            | -                | -                | -         |     0.11 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     2857 | 2024-03-09 | OG                | L   | 0.373      | -            | -                | -                | -         |   -11.38 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     2933 | 2024-03-06 | Young Ninjas      | W   | 0.354      | -            | -                | -                | -         |     0.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     3214 | 2024-02-22 | GamerLegion       | W   | 0.267      | -            | -                | -                | -         |     0.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3235 | 2024-02-21 | Spirit            | L   | 0.260      | -            | -                | -                | -         |    -1.78 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3272 | 2024-02-20 | Astralis          | W   | 0.252      | -            | -                | -                | -         |     5.47 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3286 | 2024-02-19 | Vitality          | L   | 0.247      | -            | -                | -                | -         |    -1.93 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3294 | 2024-02-19 | ex-Preasy         | W   | 0.246      | -            | -                | -                | -         |     0.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3537 | 2024-02-06 | G2                | L   | 0.161      | -            | -                | -                | -         |    -1.54 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3544 | 2024-02-06 | GamerLegion       | W   | 0.159      | -            | -                | -                | -         |     0.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3551 | 2024-02-05 | Vitality          | W   | 0.153      | -            | -                | -                | -         |     3.65 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3602 | 2024-02-03 | G2                | L   | 0.139      | -            | -                | -                | -         |    -1.31 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3672 | 2024-01-31 | BIG               | W   | 0.121      | -            | -                | -                | -         |     0.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3682 | 2024-01-31 | Astralis          | W   | 0.119      | -            | -                | -                | -         |     2.64 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3766 | 2024-01-25 | BIG               | L   | 0.081      | -            | -                | -                | -         |    -2.26 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3781 | 2024-01-24 | Cloud9            | L   | 0.074      | -            | -                | -                | -         |    -2.22 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     3889 | 2024-01-20 | ex-sYnck          | W   | 0.047      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     3909 | 2024-01-20 | IKLA              | W   | 0.045      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     3954 | 2024-01-19 | KOI               | L   | 0.040      | -            | -                | -                | -         |    -1.20 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     4009 | 2024-01-18 | MOUZ              | L   | 0.033      | -            | -                | -                | -         |    -0.28 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     4017 | 2024-01-18 | FORZE             | W   | 0.033      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($87,289.16)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.987 | $8,000.00      | $7,892.66       |
| 2024-06-02 |      0.941 | $10,000.00     | $9,410.03       |
| 2024-05-19 |      0.846 | $50,000.00     | $42,300.20      |
| 2024-05-12 |      0.800 | $7,000.00      | $5,598.99       |
| 2024-04-14 |      0.612 | $6,000.00      | $3,670.40       |
| 2024-03-31 |      0.521 | $20,000.00     | $10,412.77      |
| 2024-03-10 |      0.381 | $7,500.00      | $2,857.44       |
| 2024-02-11 |      0.194 | $24,000.00     | $4,645.10       |
| 2024-01-28 |      0.100 | $5,000.00      | $501.59         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
