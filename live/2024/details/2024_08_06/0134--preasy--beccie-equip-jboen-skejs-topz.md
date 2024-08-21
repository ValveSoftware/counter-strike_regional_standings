### Roster Details<br />
Team Name: Preasy<br />
Roster: Beccie, Equip, JBOEN, Skejs, tOPZ<br />
Global Rank: [134](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [91]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  771.2<br />
<br />
Final Rank Value (771.2) = Starting Rank Value (785.0) + Head To Head Adjustments (-13.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.324[<sup>1</sup>](#table2)
- Bounty Collected: 0.310[<sup>2</sup>](#table1)
- Opponent Network: 0.059[<sup>2</sup>](#table1)
- LAN Wins: 0.056[<sup>2</sup>](#table1)

The average of these factors is 0.187<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 785.0
- 400 + ( ( 0.187 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 785.0


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
|           21 |       28 | 2024-08-05 | Young Ninjas      | L   | 1.000      | -            | -                | -                | -         |   -16.67 | Beccie, Equip, JBOEN, Skejs, tOPZ      |
|           20 |      555 | 2024-07-21 | TSM               | L   | 1.000      | -            | -                | -                | -         |    -6.42 | AcilioN, Beccie, Equip, Griller, Skejs |
|           19 |      608 | 2024-07-19 | Johnny Speeds     | L   | 1.000      | -            | -                | -                | -         |    -2.65 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           18 |      624 | 2024-07-19 | FORZE Reload      | W   | 1.000      | 0.333        | 0.000 (0.000)    | 0.038 (0.013)    | 0 (0.000) |     6.90 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           17 |      664 | 2024-07-18 | Into the Breach   | L   | 1.000      | -            | -                | -                | -         |   -20.92 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           16 |      736 | 2024-07-17 | kONO              | W   | 1.000      | 0.333        | 0.028 (0.009)    | 0.553 (0.184)    | 0 (0.000) |    17.48 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           15 |      745 | 2024-07-17 | LEON              | W   | 1.000      | 0.143        | 0.007 (0.001)    | 0.124 (0.018)    | 0 (0.000) |    10.99 | Beccie, Equip, Griller, JBOEN, Skejs   |
|           14 |      930 | 2024-07-10 | Insilio           | L   | 1.000      | -            | -                | -                | -         |    -8.69 | Beccie, Equip, Griller, Skejs, VireZ   |
|           13 |     1068 | 2024-06-16 | Aurora Young Blud | L   | 0.858      | -            | -                | -                | -         |    -8.64 | Beccie, Equip, Griller, Skejs, VireZ   |
|           12 |     1103 | 2024-06-15 | LEON              | W   | 0.851      | 0.143        | 0.007 (0.001)    | 0.124 (0.015)    | 0 (0.000) |     9.52 | Beccie, Equip, Griller, Skejs, VireZ   |
|           11 |     1204 | 2024-06-12 | MASONIC           | W   | 0.832      | 0.143        | 0.009 (0.001)    | 0.081 (0.010)    | 0 (0.000) |    11.97 | Beccie, Equip, Griller, Skejs, VireZ   |
|           10 |     1220 | 2024-06-11 | CYBERSHOKE        | L   | 0.826      | -            | -                | -                | -         |    -9.52 | Beccie, Equip, Griller, Skejs, VireZ   |
|            9 |     1766 | 2024-05-28 | Permitta          | L   | 0.732      | -            | -                | -                | -         |    -6.96 | Beccie, Equip, Griller, Skejs, VireZ   |
|            8 |     1806 | 2024-05-26 | Johnny Speeds     | L   | 0.718      | -            | -                | -                | -         |    -1.45 | Beccie, Equip, Griller, Skejs, VireZ   |
|            7 |     1900 | 2024-05-22 | ECLOT             | W   | 0.692      | 0.371        | 0.086 (0.022)    | 0.537 (0.138)    | 0 (0.000) |    20.24 | Beccie, Equip, Griller, Skejs, VireZ   |
|            6 |     2163 | 2024-05-15 | kONO              | L   | 0.645      | -            | -                | -                | -         |    -7.71 | Beccie, Equip, Griller, Skejs, VireZ   |
|            5 |     2263 | 2024-05-12 | Johnny Speeds     | W   | 0.625      | 0.333        | 0.122 (0.025)    | 1.000 (0.208)    | 0 (0.000) |    18.64 | Beccie, Equip, Griller, Skejs, VireZ   |
|            4 |     2297 | 2024-05-11 | Passion UA        | L   | 0.618      | -            | -                | -                | -         |    -3.59 | Beccie, Equip, Griller, Skejs, VireZ   |
|            3 |     2576 | 2024-04-27 | 777               | L   | 0.526      | -            | -                | -                | -         |    -9.96 | Beccie, Equip, Griller, Skejs, VireZ   |
|            2 |     2708 | 2024-04-21 | Astralis Talent   | L   | 0.485      | -            | -                | -                | -         |    -7.85 | Beccie, Equip, Griller, Skejs, VireZ   |
|            1 |     2715 | 2024-04-20 | Sashi Academy     | W   | 0.481      | 0.318        | 0.000 (0.000)    | 0.000 (0.000)    | 1 (0.481) |     1.57 | Beccie, Equip, Griller, Skejs, VireZ   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,645.59)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-07-20 |      1.000 | $1,250.00      | $1,250.00       |
| 2024-05-16 |      0.651 | $1,500.00      | $976.46         |
| 2024-04-27 |      0.527 | $795.00        | $419.13         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
