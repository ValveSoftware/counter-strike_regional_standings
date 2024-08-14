### Roster Details<br />
Team Name: Preasy<br />
Roster: Beccie, Equip, JBOEN, Skejs, tOPZ<br />
Global Rank: [159](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [102]( ../standings_europe.md)<br />
<br />
Final Rank Value:  694.7<br />
<br />
Final Rank Value (694.7) = Starting Rank Value (761.1) + Head To Head Adjustments (-66.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.322[<sup>1</sup>](#table2)
- Bounty Collected: 0.306[<sup>2</sup>](#table1)
- Opponent Network: 0.056[<sup>2</sup>](#table1)
- LAN Wins: 0.048[<sup>2</sup>](#table1)

The average of these factors is 0.183<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 761.1
- 400 + ( ( 0.183 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 761.1


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
|           25 |        5 | 2024-08-14 | Permitta          | L   | 1.000      | -            | -                | -                | -         |    -7.57 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           24 |       93 | 2024-08-12 | Monte Gen         | L   | 1.000      | -            | -                | -                | -         |   -22.05 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           23 |      171 | 2024-08-09 | Project G         | L   | 1.000      | -            | -                | -                | -         |   -22.73 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           22 |      234 | 2024-08-07 | The Suspect       | L   | 1.000      | -            | -                | -                | -         |   -11.45 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           21 |      301 | 2024-08-05 | Young Ninjas      | L   | 1.000      | -            | -                | -                | -         |   -16.11 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           20 |      828 | 2024-07-21 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -5.34 | AcilioN, Beccie, Equip, Griller, Skejs |
|           19 |      881 | 2024-07-19 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.90 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           18 |      897 | 2024-07-19 | FORZE Reload      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.038 (0.013)    | 0 (0.000) |     7.20 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |      937 | 2024-07-18 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -14.72 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           16 |     1009 | 2024-07-17 | kONO              | W   | 1.000      | 0.333        | 0.029 (0.010)    | 0.603 (0.201)    | 0 (0.000) |    18.70 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           15 |     1018 | 2024-07-17 | LEON              | W   | 1.000      | 0.143        | 0.006 (0.001)    | 0.114 (0.016)    | 0 (0.000) |    11.23 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           14 |     1203 | 2024-07-10 | Insilio           | L   | 0.964      | -            | -                | -                | -         |    -8.69 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |     1341 | 2024-06-16 | Aurora Young Blud | L   | 0.804      | -            | -                | -                | -         |    -7.64 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |     1376 | 2024-06-15 | LEON              | W   | 0.797      | 0.143        | 0.006 (0.001)    | 0.114 (0.013)    | 0 (0.000) |     9.15 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |     1477 | 2024-06-12 | MASONIC           | W   | 0.777      | 0.143        | 0.008 (0.001)    | 0.073 (0.008)    | 0 (0.000) |    11.00 | Beccie, Equip, Griller, Skejs, VireZ   |
|           10 |     1493 | 2024-06-11 | CYBERSHOKE        | L   | 0.772      | -            | -                | -                | -         |    -8.17 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     2039 | 2024-05-28 | Permitta          | L   | 0.678      | -            | -                | -                | -         |    -6.47 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     2079 | 2024-05-26 | Johnny Speeds     | L   | 0.664      | -            | -                | -                | -         |    -1.53 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     2173 | 2024-05-22 | ECLOT             | W   | 0.638      | 0.371        | 0.078 (0.019)    | 0.501 (0.118)    | 0 (0.000) |    18.38 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     2436 | 2024-05-15 | kONO              | L   | 0.590      | -            | -                | -                | -         |    -6.05 | Beccie, Equip, Griller, Skejs, VireZ   |
|            5 |     2536 | 2024-05-12 | Johnny Speeds     | W   | 0.570      | 0.333        | 0.122 (0.023)    | 1.000 (0.190)    | 0 (0.000) |    16.88 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     2570 | 2024-05-11 | Passion UA        | L   | 0.564      | -            | -                | -                | -         |    -3.25 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     2849 | 2024-04-27 | 777               | L   | 0.472      | -            | -                | -                | -         |    -8.83 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     2981 | 2024-04-21 | Astralis Talent   | L   | 0.431      | -            | -                | -                | -         |    -7.08 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     2988 | 2024-04-20 | Sashi Academy     | W   | 0.427      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.427) |     1.57 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,521.48)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-05-16 |      0.597 | $1,500.00      | $895.34         |
| 2024-04-27 |      0.473 | $795.00        | $376.14         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
