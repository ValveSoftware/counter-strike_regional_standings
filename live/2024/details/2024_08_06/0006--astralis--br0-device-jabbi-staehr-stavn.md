### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Global Rank: [6](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [6]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  1704.0<br />
<br />
Final Rank Value (1704.0) = Starting Rank Value (1727.6) + Head To Head Adjustments (-23.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.709[<sup>1</sup>](#table2)
- Bounty Collected: 0.619[<sup>2</sup>](#table1)
- Opponent Network: 0.312[<sup>2</sup>](#table1)
- LAN Wins: 0.941[<sup>2</sup>](#table1)

The average of these factors is 0.645<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1727.6
- 400 + ( ( 0.645 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1727.6


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
|           34 |       69 | 2024-08-04 | Ninjas in Pyjamas | W   | 1.000      | 0.581        | 0.253 (0.147)    | 0.531 (0.309)    | 1 (1.000) |    10.64 | br0, device, jabbi, Staehr, stavn    |
|           33 |       98 | 2024-08-03 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -9.50 | br0, device, jabbi, Staehr, stavn    |
|           32 |      139 | 2024-08-02 | Falcons           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.73 | br0, device, jabbi, Staehr, stavn    |
|           31 |      264 | 2024-07-30 | Vitality          | L   | 1.000      | -            | -                | -                | -         |   -10.02 | br0, device, jabbi, Staehr, stavn    |
|           30 |      292 | 2024-07-29 | Falcons           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     5.63 | br0, device, jabbi, Staehr, stavn    |
|           29 |     1117 | 2024-06-14 | Virtus.pro        | L   | 0.847      | -            | -                | -                | -         |   -15.18 | br0, device, jabbi, Staehr, stavn    |
|           28 |     1176 | 2024-06-13 | SAW               | W   | 0.838      | 0.729        | -                | 0.516 (0.315)    | 1 (0.838) |     1.16 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1199 | 2024-06-12 | Natus Vincere     | L   | 0.833      | -            | -                | -                | -         |    -6.57 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1357 | 2024-06-08 | The MongolZ       | L   | 0.806      | -            | -                | -                | -         |    -7.21 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1408 | 2024-06-07 | BetBoom           | W   | 0.800      | 0.715        | 0.248 (0.142)    | 0.513 (0.293)    | 1 (0.800) |     3.82 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1469 | 2024-06-06 | The MongolZ       | W   | 0.793      | 0.715        | 1.000 (0.567)    | 0.694 (0.394)    | 1 (0.793) |    18.46 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1489 | 2024-06-06 | ENCE              | W   | 0.792      | 0.715        | -                | 0.422 (0.239)    | 1 (0.792) |     3.07 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1495 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.791      | -            | -                | -                | -         |   -17.03 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1540 | 2024-06-05 | Sashi             | L   | 0.786      | -            | -                | -                | -         |   -23.57 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1552 | 2024-06-05 | HEROIC            | W   | 0.784      | 0.715        | -                | 0.354 (0.199)    | 1 (0.784) |     6.83 | br0, device, jabbi, Staehr, stavn    |
|           19 |     1899 | 2024-05-22 | Liquid            | L   | 0.692      | -            | -                | -                | -         |   -15.20 | br0, device, jabbi, Staehr, stavn    |
|           18 |     1941 | 2024-05-21 | Aurora            | W   | 0.686      | 0.769        | 0.420 (0.222)    | 0.758 (0.400)    | -         |     5.47 | br0, device, jabbi, Staehr, stavn    |
|           17 |     1971 | 2024-05-20 | BetBoom           | W   | 0.680      | 0.769        | 0.248 (0.129)    | 0.513 (0.268)    | -         |     2.33 | br0, device, jabbi, Staehr, stavn    |
|           16 |     1994 | 2024-05-19 | BIG               | W   | 0.674      | -            | -                | -                | -         |     1.63 | br0, device, jabbi, Staehr, stavn    |
|           15 |     2286 | 2024-05-11 | Vitality          | L   | 0.620      | -            | -                | -                | -         |    -6.71 | br0, device, jabbi, Staehr, stavn    |
|           14 |     2307 | 2024-05-10 | Liquid            | W   | 0.613      | 0.889        | 0.383 (0.209)    | 0.437 (0.238)    | 1 (0.613) |     5.66 | br0, device, jabbi, Staehr, stavn    |
|           13 |     2573 | 2024-04-27 | 3DMAX             | W   | 0.526      | 0.889        | 0.510 (0.238)    | 1.000 (0.468)    | 1 (0.526) |     5.88 | br0, device, jabbi, Staehr, stavn    |
|           12 |     2643 | 2024-04-24 | FaZe              | W   | 0.507      | 0.889        | 0.625 (0.281)    | -                | -         |     7.45 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2664 | 2024-04-23 | Eternal Fire      | W   | 0.500      | 0.889        | 0.739 (0.328)    | -                | -         |     7.17 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2950 | 2024-04-13 | FaZe              | L   | 0.432      | -            | -                | -                | -         |    -7.49 | br0, device, jabbi, Staehr, stavn    |
|            9 |     3047 | 2024-04-10 | Virtus.pro        | W   | 0.411      | -            | -                | -                | -         |     5.86 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3099 | 2024-04-09 | FaZe              | W   | 0.405      | 0.624        | 0.625 (0.158)    | -                | -         |     5.84 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3131 | 2024-04-08 | Steel Helmet      | W   | 0.397      | -            | -                | -                | -         |     0.02 | br0, device, jabbi, Staehr, stavn    |
|            6 |     4100 | 2024-02-23 | 9 Pandas          | L   | 0.099      | -            | -                | -                | -         |    -3.05 | blameF, device, jabbi, Staehr, stavn |
|            5 |     4119 | 2024-02-22 | ENCE              | L   | 0.092      | -            | -                | -                | -         |    -2.31 | blameF, device, jabbi, Staehr, stavn |
|            4 |     4146 | 2024-02-21 | Monte             | W   | 0.085      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |
|            3 |     4174 | 2024-02-20 | HEROIC            | L   | 0.079      | -            | -                | -                | -         |    -1.78 | blameF, device, jabbi, Staehr, stavn |
|            2 |     4187 | 2024-02-19 | Spirit            | L   | 0.074      | -            | -                | -                | -         |    -0.63 | blameF, device, jabbi, Staehr, stavn |
|            1 |     4197 | 2024-02-19 | Nexus             | W   | 0.072      | -            | -                | -                | -         |     0.02 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($124,439.75)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.39) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-04 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-16 |      0.860 | $20,000.00     | $17,199.04      |
| 2024-06-09 |      0.813 | $28,000.00     | $22,772.25      |
| 2024-05-23 |      0.700 | $50,000.00     | $35,004.00      |
| 2024-05-12 |      0.627 | $45,000.00     | $28,195.56      |
| 2024-04-14 |      0.438 | $20,000.00     | $8,768.90       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
