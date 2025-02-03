### Roster Details<br />
Team Name: L&G<br />
Roster: kL1o, kr1vda, Malkiss, marat2k, OneUn1que<br />
Global Rank: [103](../../standings_global_2025_02_03.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_02_03.md)<br />
Regional Rank: [72]( ../../standings_europe_2025_02_03.md)<br />
<br />
Final Rank Value:  836.5<br />
<br />
Final Rank Value (836.5) = Starting Rank Value (833.1) + Head To Head Adjustments (3.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.448[<sup>1</sup>](#table2)
- Bounty Collected: 0.323[<sup>2</sup>](#table1)
- Opponent Network: 0.122[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.223<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 833.1
- 400 + ( ( 0.223 - 0.000 ) / ( 0.825 - 0.000 ) ) * 1600 = 833.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                    |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           36 |      590 | 2024-12-11 | FLuffy Gangsters  | L   | 0.841      | -            | -                | -                | -         |   -16.58 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           35 |      600 | 2024-12-10 | CYBERSHOKE        | L   | 0.834      | -            | -                | -                | -         |   -15.10 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           34 |      623 | 2024-12-08 | 500               | L   | 0.820      | -            | -                | -                | -         |    -6.61 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           33 |      687 | 2024-12-06 | FAVBET            | L   | 0.807      | -            | -                | -                | -         |   -11.66 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           32 |      743 | 2024-12-04 | CPH Wolves        | W   | 0.793      | 0.372        | 0.017 (0.005)    | 0.468 (0.138)    | 0 (0.000) |    10.24 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           31 |      776 | 2024-12-02 | CYBERSHOKE        | W   | 0.780      | 0.372        | 0.016 (0.005)    | 0.565 (0.164)    | 0 (0.000) |    10.94 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           30 |      814 | 2024-11-30 | Nuclear TigeRES   | W   | 0.768      | -            | -                | -                | 0 (0.000) |     3.69 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           29 |      869 | 2024-11-28 | ALTERNATE aTTaX   | W   | 0.753      | 0.372        | 0.066 (0.019)    | 0.643 (0.180)    | 0 (0.000) |    16.09 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           28 |      903 | 2024-11-26 | Gaimin Gladiators | L   | 0.738      | -            | -                | -                | -         |    -8.29 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           27 |      914 | 2024-11-25 | BC.Game           | L   | 0.732      | -            | -                | -                | -         |   -12.61 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           26 |      974 | 2024-11-22 | Astralis Talent   | W   | 0.713      | 0.333        | -                | 0.499 (0.119)    | 0 (0.000) |     8.07 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           25 |     1067 | 2024-11-17 | Anonymo           | W   | 0.679      | 0.333        | 0.066 (0.015)    | 0.423 (0.096)    | 0 (0.000) |     9.24 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           24 |     1121 | 2024-11-15 | GenOne            | W   | 0.665      | 0.333        | 0.020 (0.004)    | 0.618 (0.137)    | 0 (0.000) |     9.65 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           23 |     1170 | 2024-11-14 | Anonymo           | L   | 0.658      | -            | -                | -                | -         |   -11.47 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           22 |     1227 | 2024-11-12 | Viperio           | W   | 0.645      | -            | -                | -                | 0 (0.000) |     5.16 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           21 |     1282 | 2024-11-10 | CPH Wolves        | W   | 0.632      | 0.333        | 0.017 (0.004)    | 0.468 (0.099)    | 0 (0.000) |     8.40 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           20 |     1577 | 2024-10-26 | Adventurers       | L   | 0.532      | -            | -                | -                | -         |    -8.90 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           19 |     1607 | 2024-10-25 | GenOne            | W   | 0.524      | 0.333        | 0.020 (0.003)    | 0.618 (0.108)    | 0 (0.000) |     7.34 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           18 |     1616 | 2024-10-24 | WOPA              | W   | 0.518      | 0.333        | 0.065 (0.011)    | 0.673 (0.116)    | -         |     9.39 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           17 |     1634 | 2024-10-22 | Anonymo           | W   | 0.505      | -            | -                | -                | -         |     1.31 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           16 |     1642 | 2024-10-21 | Adventurers       | L   | 0.499      | -            | -                | -                | -         |    -8.42 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           15 |     1699 | 2024-10-19 | Illuminar         | L   | 0.484      | -            | -                | -                | -         |    -6.29 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           14 |     1752 | 2024-10-17 | CPH Wolves        | L   | 0.471      | -            | -                | -                | -         |    -8.49 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           13 |     1943 | 2024-10-08 | NAVI Junior       | L   | 0.411      | -            | -                | -                | -         |    -3.37 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           12 |     1994 | 2024-10-06 | UNiTY             | W   | 0.398      | 0.333        | 0.069 (0.009)    | -                | -         |     7.25 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           11 |     2057 | 2024-10-04 | Illuminar         | W   | 0.385      | 0.333        | -                | 0.486 (0.062)    | -         |     7.23 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|           10 |     2183 | 2024-10-01 | Heimo             | W   | 0.365      | -            | -                | -                | -         |     3.88 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            9 |     2221 | 2024-09-29 | kONO              | W   | 0.354      | 0.288        | 0.048 (0.005)    | -                | -         |     6.40 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            8 |     2236 | 2024-09-29 | SkyFury           | W   | 0.352      | -            | -                | -                | -         |     1.93 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            7 |     2690 | 2024-09-16 | kONO              | L   | 0.266      | -            | -                | -                | -         |    -3.54 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            6 |     2723 | 2024-09-15 | GameAgents        | W   | 0.259      | -            | -                | -                | -         |     3.19 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            5 |     2764 | 2024-09-14 | ECLOT             | L   | 0.252      | -            | -                | -                | -         |    -0.71 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            4 |     2855 | 2024-09-11 | Preasy            | W   | 0.232      | -            | -                | -                | -         |     2.89 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            3 |     2875 | 2024-09-10 | Daystar           | L   | 0.227      | -            | -                | -                | -         |    -5.03 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            2 |     2942 | 2024-09-07 | DASH              | W   | 0.207      | -            | -                | -                | -         |     1.86 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |
|            1 |     3075 | 2024-09-03 | CPH Wolves        | L   | 0.180      | -            | -                | -                | -         |    -3.63 | kL1o, kr1vda, Malkiss, marat2k, OneUn1que |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($11,125.53)
- Divide that value by the 5th highest value among all rosters ($188,876.95)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-12-17 |      0.880 | $1,208.00      | $1,063.29       |
| 2024-12-08 |      0.820 | $4,300.00      | $3,527.90       |
| 2024-11-17 |      0.679 | $6,000.00      | $4,072.71       |
| 2024-10-27 |      0.538 | $1,000.00      | $538.31         |
| 2024-10-08 |      0.411 | $3,000.00      | $1,233.09       |
| 2024-09-29 |      0.354 | $1,950.00      | $690.23         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
