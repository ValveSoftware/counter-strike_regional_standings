### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [7]( ../standings_europe.md)<br />
Final Rank Value:  1815.3<br />
<br />
Final Rank Value (1815.3) = Starting Rank Value (1927.3) + Head To Head Adjustments (-112.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.785[<sup>1</sup>](#table2)
- Bounty Collected: 0.743[<sup>2</sup>](#table1)
- Opponent Network: 0.520[<sup>2</sup>](#table1)
- LAN Wins: 0.959[<sup>2</sup>](#table1)

The average of these factors is 0.752<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1927.3
- 400 + ( ( 0.752 - 0.000 ) / ( 0.787 - 0.000 ) ) * 1600 = 1927.3


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                               |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           41 |       79 | 2024-06-14 | Virtus.pro        | L   | 1.000      | -            | -                | -                | -         |   -19.46 | br0, device, jabbi, Staehr, stavn    |
|           40 |      138 | 2024-06-13 | SAW               | W   | 1.000      | 0.729        | -                | 0.571 (0.416)    | 1 (1.000) |     1.21 | br0, device, jabbi, Staehr, stavn    |
|           39 |      161 | 2024-06-12 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |   -13.43 | br0, device, jabbi, Staehr, stavn    |
|           38 |      319 | 2024-06-08 | The MongolZ       | L   | 1.000      | -            | -                | -                | -         |   -15.52 | br0, device, jabbi, Staehr, stavn    |
|           37 |      370 | 2024-06-07 | BetBoom           | W   | 1.000      | 0.715        | 0.414 (0.296)    | 0.798 (0.571)    | 1 (1.000) |     4.28 | br0, device, jabbi, Staehr, stavn    |
|           36 |      431 | 2024-06-06 | The MongolZ       | W   | 1.000      | 0.715        | 0.986 (0.706)    | 0.681 (0.487)    | 1 (1.000) |    16.21 | br0, device, jabbi, Staehr, stavn    |
|           35 |      451 | 2024-06-06 | ENCE              | W   | 1.000      | -            | -                | -                | 1 (1.000) |     2.09 | br0, device, jabbi, Staehr, stavn    |
|           34 |      457 | 2024-06-06 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -25.25 | br0, device, jabbi, Staehr, stavn    |
|           33 |      502 | 2024-06-05 | Sashi             | L   | 1.000      | -            | -                | -                | -         |   -30.45 | br0, device, jabbi, Staehr, stavn    |
|           32 |      514 | 2024-06-05 | HEROIC            | W   | 1.000      | 0.715        | 0.354 (0.253)    | 0.545 (0.390)    | 1 (1.000) |     8.93 | br0, device, jabbi, Staehr, stavn    |
|           31 |      863 | 2024-05-22 | Liquid            | L   | 1.000      | -            | -                | -                | -         |   -24.82 | br0, device, jabbi, Staehr, stavn    |
|           30 |      905 | 2024-05-21 | Aurora            | W   | 1.000      | 0.769        | 0.526 (0.405)    | 0.874 (0.672)    | -         |     2.93 | br0, device, jabbi, Staehr, stavn    |
|           29 |      935 | 2024-05-20 | BetBoom           | W   | 1.000      | 0.769        | 0.414 (0.318)    | 0.798 (0.613)    | -         |     2.67 | br0, device, jabbi, Staehr, stavn    |
|           28 |      958 | 2024-05-19 | BIG               | W   | 1.000      | 0.769        | 0.225 (0.173)    | -                | -         |     1.93 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1250 | 2024-05-11 | Vitality          | L   | 0.949      | -            | -                | -                | -         |   -11.84 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1271 | 2024-05-10 | Liquid            | W   | 0.942      | 0.889        | 0.498 (0.417)    | 0.629 (0.527)    | 1 (0.942) |     5.33 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1537 | 2024-04-27 | 3DMAX             | W   | 0.855      | 0.889        | -                | 1.000 (0.760)    | 1 (0.855) |     0.73 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1607 | 2024-04-24 | FaZe              | W   | 0.836      | 0.889        | 1.000 (0.743)    | 0.540 (0.401)    | 1 (0.836) |    15.65 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1628 | 2024-04-23 | Eternal Fire      | W   | 0.829      | 0.889        | 1.000 (0.737)    | 0.485 (0.357)    | 1 (0.829) |    10.10 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1914 | 2024-04-13 | FaZe              | L   | 0.761      | -            | -                | -                | -         |    -9.87 | br0, device, jabbi, Staehr, stavn    |
|           21 |     2011 | 2024-04-10 | Virtus.pro        | W   | 0.740      | -            | -                | -                | 1 (0.740) |     7.87 | br0, device, jabbi, Staehr, stavn    |
|           20 |     2063 | 2024-04-09 | FaZe              | W   | 0.734      | 0.624        | 1.000 (0.458)    | -                | -         |    13.98 | br0, device, jabbi, Staehr, stavn    |
|           19 |     2095 | 2024-04-08 | Steel Helmet      | W   | 0.726      | -            | -                | -                | -         |     0.03 | br0, device, jabbi, Staehr, stavn    |
|           18 |     3065 | 2024-02-23 | 9 Pandas          | L   | 0.428      | -            | -                | -                | -         |   -13.24 | blameF, device, jabbi, Staehr, stavn |
|           17 |     3084 | 2024-02-22 | ENCE              | L   | 0.421      | -            | -                | -                | -         |   -11.57 | blameF, device, jabbi, Staehr, stavn |
|           16 |     3111 | 2024-02-21 | Monte             | W   | 0.414      | -            | -                | -                | -         |     0.49 | blameF, device, jabbi, Staehr, stavn |
|           15 |     3139 | 2024-02-20 | HEROIC            | L   | 0.408      | -            | -                | -                | -         |    -8.57 | blameF, device, jabbi, Staehr, stavn |
|           14 |     3152 | 2024-02-19 | Spirit            | L   | 0.403      | -            | -                | -                | -         |    -4.76 | blameF, device, jabbi, Staehr, stavn |
|           13 |     3162 | 2024-02-19 | Nexus             | W   | 0.401      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |
|           12 |     3520 | 2024-02-01 | ENCE              | L   | 0.283      | -            | -                | -                | -         |    -8.04 | blameF, device, jabbi, Staehr, stavn |
|           11 |     3549 | 2024-01-31 | HEROIC            | L   | 0.275      | -            | -                | -                | -         |    -6.06 | blameF, device, jabbi, Staehr, stavn |
|           10 |     3586 | 2024-01-28 | BIG               | W   | 0.255      | -            | -                | -                | -         |     0.51 | blameF, device, jabbi, Staehr, stavn |
|            9 |     3602 | 2024-01-27 | Vitality          | L   | 0.248      | -            | -                | -                | -         |    -3.31 | blameF, device, jabbi, Staehr, stavn |
|            8 |     3668 | 2024-01-23 | Vitality          | W   | 0.223      | -            | -                | -                | -         |     4.10 | blameF, device, jabbi, Staehr, stavn |
|            7 |     3695 | 2024-01-22 | Falcons           | W   | 0.216      | -            | -                | -                | -         |     1.00 | blameF, device, jabbi, Staehr, stavn |
|            6 |     3765 | 2024-01-20 | PERA              | W   | 0.202      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3815 | 2024-01-19 | AMKAL             | L   | 0.196      | -            | -                | -                | -         |    -6.08 | blameF, device, jabbi, Staehr, stavn |
|            4 |     3880 | 2024-01-18 | ex-Preasy         | W   | 0.189      | -            | -                | -                | -         |     0.02 | blameF, device, jabbi, Staehr, stavn |
|            3 |     3883 | 2024-01-18 | Enterprise        | W   | 0.189      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            2 |     4052 | 2024-01-14 | Ninjas in Pyjamas | W   | 0.162      | -            | -                | -                | -         |     0.01 | blameF, device, jabbi, Staehr, stavn |
|            1 |     4088 | 2024-01-13 | ALTERNATE aTTaX   | W   | 0.155      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($160,272.18)
- Divide that value by the 5th highest value among all rosters ($300,710.22)
- The final value (0.53) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      1.000 | $20,000.00     | $20,000.00      |
| 2024-06-09 |      1.000 | $28,000.00     | $28,000.00      |
| 2024-05-23 |      1.000 | $50,000.00     | $50,000.00      |
| 2024-05-12 |      0.956 | $45,000.00     | $42,998.78      |
| 2024-04-14 |      0.767 | $20,000.00     | $15,348.11      |
| 2024-02-02 |      0.290 | $2,500.00      | $725.40         |
| 2024-01-28 |      0.256 | $12,500.00     | $3,199.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
