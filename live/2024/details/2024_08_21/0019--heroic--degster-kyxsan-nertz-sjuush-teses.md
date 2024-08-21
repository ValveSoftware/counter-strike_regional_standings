### Roster Details<br />
Team Name: HEROIC<br />
Roster: degster, kyxsan, NertZ, sjuush, TeSeS<br />
Global Rank: [19](../../standings_global_2024_08_21.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_21.md)<br />
Regional Rank: [14]( ../../standings_europe_2024_08_21.md)<br />
<br />
Final Rank Value:  1433.6<br />
<br />
Final Rank Value (1433.6) = Starting Rank Value (1463.0) + Head To Head Adjustments (-29.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.609[<sup>1</sup>](#table2)
- Bounty Collected: 0.530[<sup>2</sup>](#table1)
- Opponent Network: 0.218[<sup>2</sup>](#table1)
- LAN Wins: 0.784[<sup>2</sup>](#table1)

The average of these factors is 0.535<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1463.0
- 400 + ( ( 0.535 - 0.000 ) / ( 0.806 - 0.000 ) ) * 1600 = 1463.0


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
|           43 |        3 | 2024-08-21 | OG                | L   | 1.000      | -            | -                | -                | -         |   -28.37 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           42 |      389 | 2024-08-09 | FURIA             | L   | 1.000      | -            | -                | -                | -         |   -10.79 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           41 |      410 | 2024-08-08 | 3DMAX             | W   | 1.000      | 0.143        | 0.519 (0.074)    | 0.969 (0.138)    | 1 (1.000) |    13.22 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           40 |      462 | 2024-08-07 | MIBR              | L   | 1.000      | -            | -                | -                | -         |   -22.64 | kyxsan, NertZ, sjuush, TeSeS, Woro2k   |
|           39 |      643 | 2024-08-02 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -13.13 | kyxsan, NertZ, sAw, sjuush, TeSeS      |
|           38 |      779 | 2024-07-30 | Spirit            | L   | 1.000      | -            | -                | -                | -         |    -3.91 | kyxsan, NertZ, sAw, sjuush, TeSeS      |
|           37 |      801 | 2024-07-29 | Complexity        | W   | 1.000      | 0.581        | 0.363 (0.211)    | 0.361 (0.210)    | 1 (1.000) |    18.38 | kyxsan, NertZ, sAw, sjuush, TeSeS      |
|           36 |     1976 | 2024-06-06 | ENCE              | W   | 0.692      | 0.715        | 0.157 (0.078)    | 0.348 (0.172)    | 1 (0.692) |     5.58 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           35 |     1993 | 2024-06-06 | Sashi             | W   | 0.691      | 0.715        | 0.180 (0.089)    | 0.989 (0.489)    | 1 (0.691) |     3.42 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           34 |     2001 | 2024-06-06 | The MongolZ       | L   | 0.690      | -            | -                | -                | -         |    -2.16 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           33 |     2029 | 2024-06-05 | Ninjas in Pyjamas | L   | 0.686      | -            | -                | -                | -         |   -11.36 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           32 |     2052 | 2024-06-05 | Astralis          | L   | 0.683      | -            | -                | -                | -         |    -5.21 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           31 |     2184 | 2024-05-31 | Vitality          | L   | 0.653      | -            | -                | -                | -         |    -1.44 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           30 |     2229 | 2024-05-29 | BIG               | W   | 0.641      | 0.624        | -                | 0.275 (0.110)    | 1 (0.641) |     4.88 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           29 |     2241 | 2024-05-29 | Natus Vincere     | W   | 0.639      | 0.624        | 1.000 (0.399)    | 0.382 (0.153)    | 1 (0.639) |    18.87 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           28 |     2261 | 2024-05-28 | M80               | W   | 0.633      | 0.624        | -                | 0.576 (0.227)    | 1 (0.633) |     3.50 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           27 |     2277 | 2024-05-27 | Virtus.pro        | L   | 0.627      | -            | -                | -                | -         |    -6.33 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           26 |     2528 | 2024-05-18 | MOUZ              | L   | 0.566      | -            | -                | -                | -         |    -1.50 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           25 |     2561 | 2024-05-17 | MIBR              | W   | 0.559      | 0.769        | 0.197 (0.085)    | 0.585 (0.251)    | 1 (0.559) |     7.24 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           24 |     2601 | 2024-05-16 | Spirit            | L   | 0.552      | -            | -                | -                | -         |    -2.31 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           23 |     2651 | 2024-05-15 | MIBR              | W   | 0.545      | 0.769        | 0.197 (0.083)    | 0.585 (0.245)    | 1 (0.545) |     7.08 | degster, kyxsan, NertZ, sjuush, TeSeS  |
|           22 |     2919 | 2024-05-04 | Ninjas in Pyjamas | L   | 0.473      | -            | -                | -                | -         |    -6.88 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           21 |     2932 | 2024-05-03 | BIG               | L   | 0.467      | -            | -                | -                | -         |   -11.28 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           20 |     2944 | 2024-05-03 | FlyQuest          | W   | 0.465      | -            | -                | -                | 1 (0.465) |     1.40 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           19 |     2962 | 2024-05-02 | Complexity        | L   | 0.459      | -            | -                | -                | -         |    -4.47 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           18 |     3008 | 2024-04-30 | Ninjas in Pyjamas | W   | 0.446      | 0.889        | 0.230 (0.091)    | 0.476 (0.189)    | -         |     7.70 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           17 |     3536 | 2024-04-10 | G2                | L   | 0.311      | -            | -                | -                | -         |    -0.57 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           16 |     3593 | 2024-04-09 | FURIA             | W   | 0.305      | -            | -                | -                | -         |     7.05 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           15 |     3627 | 2024-04-08 | 9z                | W   | 0.297      | 0.624        | 0.400 (0.074)    | -                | -         |     5.79 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           14 |     3637 | 2024-04-07 | Liquid            | L   | 0.296      | -            | -                | -                | -         |    -2.09 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           13 |     3942 | 2024-03-23 | paiN              | L   | 0.193      | -            | -                | -                | -         |    -2.17 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           12 |     3964 | 2024-03-22 | Virtus.pro        | L   | 0.184      | -            | -                | -                | -         |    -1.83 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           11 |     3976 | 2024-03-21 | Complexity        | L   | 0.180      | -            | -                | -                | -         |    -1.66 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|           10 |     3984 | 2024-03-21 | FaZe              | W   | 0.178      | 1.000        | 0.658 (0.117)    | -                | -         |     4.55 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            9 |     4033 | 2024-03-18 | Eternal Fire      | W   | 0.159      | -            | -                | -                | -         |     3.65 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            8 |     4054 | 2024-03-17 | Imperial          | W   | 0.153      | -            | -                | -                | -         |     0.69 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            7 |     4064 | 2024-03-17 | Lynn Vision       | W   | 0.152      | -            | -                | -                | -         |     0.29 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            6 |     4164 | 2024-03-13 | Metizport         | W   | 0.125      | -            | -                | -                | -         |     0.10 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            5 |     4189 | 2024-03-12 | Virtus.pro        | L   | 0.120      | -            | -                | -                | -         |    -1.16 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            4 |     4206 | 2024-03-11 | ENCE              | W   | 0.113      | -            | -                | -                | -         |     1.39 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            3 |     4218 | 2024-03-11 | ex-Preasy         | W   | 0.112      | -            | -                | -                | -         |     0.06 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            2 |     4259 | 2024-03-09 | OG                | L   | 0.099      | -            | -                | -                | -         |    -3.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |
|            1 |     4335 | 2024-03-06 | Young Ninjas      | W   | 0.079      | -            | -                | -                | -         |     0.07 | kyxsan, NertZ, nicoodoz, sjuush, TeSeS |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($70,402.05)
- Divide that value by the 5th highest value among all rosters ($307,820.64)
- The final value (0.23) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-21 |      1.000 | $5,000.00      | $5,000.00       |
| 2024-08-09 |      1.000 | $4,500.00      | $4,500.00       |
| 2024-08-04 |      1.000 | $8,500.00      | $8,500.00       |
| 2024-06-09 |      0.712 | $8,000.00      | $5,699.81       |
| 2024-06-02 |      0.667 | $10,000.00     | $6,668.98       |
| 2024-05-19 |      0.572 | $50,000.00     | $28,594.93      |
| 2024-05-12 |      0.526 | $7,000.00      | $3,680.25       |
| 2024-04-14 |      0.338 | $6,000.00      | $2,025.76       |
| 2024-03-31 |      0.247 | $20,000.00     | $4,930.66       |
| 2024-03-10 |      0.107 | $7,500.00      | $801.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
