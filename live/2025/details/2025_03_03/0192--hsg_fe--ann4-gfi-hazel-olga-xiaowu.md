### Roster Details<br />
Team Name: HSG fe<br />
Roster: Ann4, gfi, Hazel, Olga, XiaoWu<br />
Global Rank: [192](../../standings_global_2025_03_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_03_03.md)<br />
Regional Rank: [21]( ../../standings_asia_2025_03_03.md)<br />
<br />
Final Rank Value:  636.3<br />
<br />
Final Rank Value (636.3) = Starting Rank Value (631.7) + Head To Head Adjustments (4.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.267[<sup>1</sup>](#table2)
- Bounty Collected: 0.213[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.120<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 631.7
- 400 + ( ( 0.120 - 0.000 ) / ( 0.830 - 0.000 ) ) * 1600 = 631.7


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent           | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     2101 | 2024-10-18 | BIG EQUIPA         | W   | 0.294      | 0.328        | 0.021 (0.002)    | 0.070 (0.007)    | 0 (0.000) |     6.22 | Ann4, gfi, Hazel, Olga, XiaoWu |
|            5 |     2396 | 2024-10-06 | OneDay fe          | W   | 0.213      | 0.250        | 0.000 (0.000)    | 0.060 (0.003)    | 0 (0.000) |     2.28 | Ann4, gfi, Hazel, Olga, XiaoWu |
|            4 |     2762 | 2024-09-26 | nomercy fe         | L   | 0.148      | -            | -                | -                | -         |    -2.49 | Ann4, gfi, Hazel, Olga, XiaoWu |
|            3 |     3035 | 2024-09-19 | Imperial Valkyries | L   | 0.101      | -            | -                | -                | -         |    -0.36 | Ann4, gfi, Hazel, Olga, XiaoWu |
|            2 |     3200 | 2024-09-14 | Imperial Valkyries | L   | 0.065      | -            | -                | -                | -         |    -0.23 | Ann4, gfi, Hazel, Olga, XiaoWu |
|            1 |     3249 | 2024-09-12 | K27 fe             | L   | 0.054      | -            | -                | -                | -         |    -0.78 | Ann4, gfi, Hazel, Olga, XiaoWu |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($589.72)
- Divide that value by the 5th highest value among all rosters ($333,212.68)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.307 | $1,400.00      | $430.03         |
| 2024-10-06 |      0.213 | $750.00        | $159.69         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
