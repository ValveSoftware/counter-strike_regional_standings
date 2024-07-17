### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [11](../standings_global.md)<br />
Regional Rank: [9]( ../standings_europe.md)<br />
Final Rank Value:  1699.1<br />
<br />
Final Rank Value (1699.1) = Starting Rank Value (1754.3) + Head To Head Adjustments (-55.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.677[<sup>1</sup>](#table2)
- Bounty Collected: 0.601[<sup>2</sup>](#table1)
- Opponent Network: 0.320[<sup>2</sup>](#table1)
- LAN Wins: 0.924[<sup>2</sup>](#table1)

The average of these factors is 0.631<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1754.3
- 400 + ( ( 0.631 - 0.000 ) / ( 0.745 - 0.000 ) ) * 1600 = 1754.3


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
|           51 |      738 | 2024-06-06 | ENCE              | W   | 0.927      | 0.715        | 0.212 (0.141)    | 0.377 (0.250)    | 1 (0.927) |     3.41 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           50 |      755 | 2024-06-06 | Sashi             | W   | 0.925      | 0.715        | 0.215 (0.142)    | 1.000 (0.662)    | 1 (0.925) |     2.10 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           49 |      763 | 2024-06-06 | The MongolZ       | L   | 0.924      | -            | -                | -                | -         |    -6.77 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           48 |      791 | 2024-06-05 | Ninjas in Pyjamas | L   | 0.920      | -            | -                | -                | -         |   -16.51 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           47 |      814 | 2024-06-05 | Astralis          | L   | 0.918      | -            | -                | -                | -         |    -8.24 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           46 |      946 | 2024-05-31 | Vitality          | L   | 0.888      | -            | -                | -                | -         |    -5.38 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           45 |      991 | 2024-05-29 | BIG               | W   | 0.875      | 0.624        | 0.212 (0.116)    | 0.382 (0.209)    | 1 (0.875) |     3.85 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           44 |     1003 | 2024-05-29 | Natus Vincere     | W   | 0.874      | 0.624        | 1.000 (0.545)    | -                | 1 (0.874) |    19.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           43 |     1023 | 2024-05-28 | M80               | W   | 0.867      | 0.624        | 0.219 (0.119)    | 0.621 (0.336)    | 1 (0.867) |     2.40 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           42 |     1039 | 2024-05-27 | Virtus.pro        | L   | 0.861      | -            | -                | -                | -         |   -13.27 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           41 |     1290 | 2024-05-18 | MOUZ              | L   | 0.800      | -            | -                | -                | -         |    -3.71 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           40 |     1323 | 2024-05-17 | MIBR              | W   | 0.794      | 0.769        | 0.269 (0.164)    | 0.614 (0.375)    | 1 (0.794) |     8.23 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           39 |     1363 | 2024-05-16 | Spirit            | L   | 0.787      | -            | -                | -                | -         |    -4.25 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           38 |     1413 | 2024-05-15 | MIBR              | W   | 0.780      | 0.769        | 0.269 (0.161)    | 0.614 (0.368)    | 1 (0.780) |     8.12 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           37 |     1681 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.707      | -            | -                | -                | -         |   -11.42 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           36 |     1694 | 2024-05-03 | BIG               | L   | 0.701      | -            | -                | -                | -         |   -19.59 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           35 |     1706 | 2024-05-03 | FlyQuest          | W   | 0.699      | 0.889        | -                | 0.388 (0.241)    | 1 (0.699) |     2.12 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           34 |     1724 | 2024-05-02 | Complexity        | L   | 0.693      | -            | -                | -                | -         |    -9.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           33 |     1770 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.680      | 0.889        | 0.343 (0.207)    | 0.534 (0.323)    | 1 (0.680) |    10.45 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           32 |     2298 | 2024-04-10 | G2                | L   | 0.546      | -            | -                | -                | -         |    -4.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           31 |     2355 | 2024-04-09 | FURIA             | W   | 0.539      | -            | -                | -                | 1 (0.539) |     5.76 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2389 | 2024-04-08 | 9z                | W   | 0.532      | 0.624        | 0.606 (0.201)    | 0.728 (0.242)    | -         |     8.39 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2399 | 2024-04-07 | Liquid            | L   | 0.530      | -            | -                | -                | -         |   -12.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2704 | 2024-03-23 | paiN              | L   | 0.428      | -            | -                | -                | -         |    -9.56 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2726 | 2024-03-22 | Virtus.pro        | L   | 0.419      | -            | -                | -                | -         |    -6.79 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2738 | 2024-03-21 | Complexity        | L   | 0.414      | -            | -                | -                | -         |    -5.66 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           25 |     2746 | 2024-03-21 | FaZe              | W   | 0.413      | 1.000        | 0.902 (0.372)    | 0.479 (0.198)    | -         |     9.14 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           24 |     2795 | 2024-03-18 | Eternal Fire      | W   | 0.393      | -            | -                | -                | -         |     5.91 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           23 |     2816 | 2024-03-17 | Imperial          | W   | 0.388      | -            | -                | -                | -         |     2.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           22 |     2826 | 2024-03-17 | Lynn Vision       | W   | 0.386      | -            | -                | -                | -         |     0.36 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     2926 | 2024-03-13 | Metizport         | W   | 0.360      | -            | -                | -                | -         |     0.18 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     2951 | 2024-03-12 | Virtus.pro        | L   | 0.354      | -            | -                | -                | -         |    -5.63 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     2968 | 2024-03-11 | ENCE              | W   | 0.348      | -            | -                | -                | -         |     1.88 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     2980 | 2024-03-11 | ex-Preasy         | W   | 0.347      | -            | -                | -                | -         |     0.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3021 | 2024-03-09 | OG                | L   | 0.333      | -            | -                | -                | -         |   -10.18 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3097 | 2024-03-06 | Young Ninjas      | W   | 0.314      | -            | -                | -                | -         |     0.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3378 | 2024-02-22 | GamerLegion       | W   | 0.227      | -            | -                | -                | -         |     0.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3399 | 2024-02-21 | Spirit            | L   | 0.220      | -            | -                | -                | -         |    -1.46 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3436 | 2024-02-20 | Astralis          | W   | 0.212      | -            | -                | -                | -         |     4.60 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3450 | 2024-02-19 | Vitality          | L   | 0.208      | -            | -                | -                | -         |    -1.37 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3458 | 2024-02-19 | ex-Preasy         | W   | 0.206      | -            | -                | -                | -         |     0.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3701 | 2024-02-06 | G2                | L   | 0.121      | -            | -                | -                | -         |    -0.86 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     3708 | 2024-02-06 | GamerLegion       | W   | 0.120      | -            | -                | -                | -         |     0.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     3715 | 2024-02-05 | Vitality          | W   | 0.113      | -            | -                | -                | -         |     2.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     3766 | 2024-02-03 | G2                | L   | 0.100      | -            | -                | -                | -         |    -0.70 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     3836 | 2024-01-31 | BIG               | W   | 0.081      | -            | -                | -                | -         |     0.30 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     3846 | 2024-01-31 | Astralis          | W   | 0.080      | -            | -                | -                | -         |     1.75 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     3930 | 2024-01-25 | BIG               | L   | 0.042      | -            | -                | -                | -         |    -1.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     3945 | 2024-01-24 | Cloud9            | L   | 0.034      | -            | -                | -                | -         |    -1.04 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     4053 | 2024-01-20 | ex-sYnck          | W   | 0.008      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     4073 | 2024-01-20 | IKLA              | W   | 0.006      | -            | -                | -                | -         |     0.00 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($81,842.75)
- Divide that value by the 5th highest value among all rosters ($245,446.02)
- The final value (0.33) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-09 |      0.947 | $8,000.00      | $7,575.78       |
| 2024-06-02 |      0.901 | $10,000.00     | $9,013.93       |
| 2024-05-19 |      0.806 | $50,000.00     | $40,319.69      |
| 2024-05-12 |      0.760 | $7,000.00      | $5,321.72       |
| 2024-04-14 |      0.572 | $6,000.00      | $3,432.73       |
| 2024-03-31 |      0.481 | $20,000.00     | $9,620.56       |
| 2024-03-10 |      0.341 | $7,500.00      | $2,560.36       |
| 2024-02-11 |      0.154 | $24,000.00     | $3,694.45       |
| 2024-01-28 |      0.061 | $5,000.00      | $303.53         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
