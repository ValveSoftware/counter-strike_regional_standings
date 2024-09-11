### Roster Details<br />
Team Name: Preasy<br />
Roster: AcilioN, Beccie, Equip, Griller, JBOEN<br />
Global Rank: [177](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [114]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  637.5<br />
<br />
Final Rank Value (637.5) = Starting Rank Value (724.0) + Head To Head Adjustments (-86.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.313[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.041[<sup>2</sup>](#table1)
- LAN Wins: 0.025[<sup>2</sup>](#table1)

The average of these factors is 0.167<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 724.0
- 400 + ( ( 0.167 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 724.0


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
|           31 |       10 | 2024-09-11 | L&G               | L   | 1.000      | -            | -                | -                | -         |   -17.40 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           30 |      676 | 2024-08-22 | CPH Wolves        | L   | 1.000      | -            | -                | -                | -         |   -10.27 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           29 |      718 | 2024-08-21 | FAVBET            | L   | 1.000      | -            | -                | -                | -         |    -8.08 | AcilioN, Beccie, Equip, Griller, JBOEN |
|           28 |      836 | 2024-08-18 | ECLOT             | L   | 1.000      | -            | -                | -                | -         |    -5.07 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           27 |      933 | 2024-08-14 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -7.05 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           26 |     1021 | 2024-08-12 | Monte Gen         | L   | 0.999      | -            | -                | -                | -         |    -9.89 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           25 |     1099 | 2024-08-09 | Project G         | L   | 0.978      | -            | -                | -                | -         |   -21.54 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           24 |     1162 | 2024-08-07 | The Suspect       | L   | 0.966      | -            | -                | -                | -         |   -10.67 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           23 |     1229 | 2024-08-05 | Young Ninjas      | L   | 0.953      | -            | -                | -                | -         |   -11.37 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           22 |     1756 | 2024-07-21 | TSM               | L   | 0.852      | -            | -                | -                | -         |    -4.22 | AcilioN, Beccie, Equip, Griller, Skejs |
|           21 |     1809 | 2024-07-19 | Johnny Speeds     | L   | 0.840      | -            | -                | -                | -         |    -2.79 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           20 |     1825 | 2024-07-19 | FORZE Reload      | W   | 0.839      | 0.333        | 0.000 (0.000)    | 0.031 (0.009)    | 0 (0.000) |     6.73 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           19 |     1865 | 2024-07-18 | Into the Breach   | L   | 0.833      | -            | -                | -                | -         |    -8.93 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           18 |     1937 | 2024-07-17 | kONO              | W   | 0.827      | 0.333        | 0.025 (0.007)    | 0.512 (0.141)    | 0 (0.000) |    16.18 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |     1946 | 2024-07-17 | LEON              | W   | 0.826      | 0.143        | 0.005 (0.001)    | 0.075 (0.009)    | 0 (0.000) |    10.22 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           16 |     2071 | 2024-07-14 | Passion UA        | L   | 0.804      | -            | -                | -                | -         |    -4.27 | AcilioN, Beccie, Equip, Griller, VireZ |
|           15 |     2131 | 2024-07-10 | Insilio           | L   | 0.779      | -            | -                | -                | -         |    -6.19 | Beccie, Equip, Griller, Skejs, VireZ   |
|           14 |     2269 | 2024-06-16 | Aurora Young Blud | L   | 0.618      | -            | -                | -                | -         |    -5.10 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |     2304 | 2024-06-15 | LEON              | W   | 0.612      | 0.143        | 0.005 (0.000)    | 0.075 (0.007)    | 0 (0.000) |     7.66 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |     2405 | 2024-06-12 | MASONIC           | W   | 0.592      | 0.143        | 0.005 (0.000)    | 0.043 (0.004)    | 0 (0.000) |     7.96 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |     2421 | 2024-06-11 | CYBERSHOKE        | L   | 0.586      | -            | -                | -                | -         |    -4.69 | Beccie, Equip, Griller, Skejs, VireZ   |
|           10 |     2967 | 2024-05-28 | Permitta          | L   | 0.492      | -            | -                | -                | -         |    -4.00 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     3007 | 2024-05-26 | Johnny Speeds     | L   | 0.479      | -            | -                | -                | -         |    -1.51 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     3101 | 2024-05-22 | ECLOT             | W   | 0.452      | 0.371        | 0.071 (0.012)    | 0.733 (0.123)    | 0 (0.000) |    13.00 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     3364 | 2024-05-15 | kONO              | L   | 0.405      | -            | -                | -                | -         |    -4.18 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     3414 | 2024-05-14 | Zero Tenacity     | L   | 0.399      | -            | -                | -                | -         |    -1.80 | AcilioN, Beccie, Equip, Griller, VireZ |
|            5 |     3464 | 2024-05-12 | Johnny Speeds     | W   | 0.385      | 0.333        | 0.102 (0.013)    | 0.919 (0.118)    | 0 (0.000) |    11.02 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     3498 | 2024-05-11 | Passion UA        | L   | 0.378      | -            | -                | -                | -         |    -1.93 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     3777 | 2024-04-27 | 777               | L   | 0.286      | -            | -                | -                | -         |    -5.19 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     3909 | 2024-04-21 | Astralis Talent   | L   | 0.245      | -            | -                | -                | -         |    -4.16 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     3916 | 2024-04-20 | Sashi Academy     | W   | 0.241      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.241) |     1.06 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($1,903.65)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      0.847 | $1,250.00      | $1,058.62       |
| 2024-05-16 |      0.411 | $1,500.00      | $616.62         |
| 2024-04-27 |      0.287 | $795.00        | $228.42         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
