### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Global Rank: [8](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1673.5<br />
<br />
Final Rank Value (1673.5) = Starting Rank Value (1684.5) + Head To Head Adjustments (-11.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.721[<sup>1</sup>](#table2)
- Bounty Collected: 0.623[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.929[<sup>2</sup>](#table1)

The average of these factors is 0.651<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1684.5
- 400 + ( ( 0.651 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 1684.5


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
|           37 |       79 | 2024-08-12 | G2                | L   | 1.000      | -            | -                | -                | -         |    -5.71 | br0, device, jabbi, Staehr, stavn    |
|           36 |      113 | 2024-08-11 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -6.55 | br0, device, jabbi, Staehr, stavn    |
|           35 |      132 | 2024-08-10 | 9z                | W   | 1.000      | 1.000        | 0.408 (0.408)    | 0.591 (0.591)    | 1 (1.000) |     7.59 | br0, device, jabbi, Staehr, stavn    |
|           34 |      342 | 2024-08-04 | Ninjas in Pyjamas | W   | 1.000      | 0.581        | 0.236 (0.137)    | 0.498 (0.289)    | 1 (1.000) |     9.09 | br0, device, jabbi, Staehr, stavn    |
|           33 |      371 | 2024-08-03 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -9.31 | br0, device, jabbi, Staehr, stavn    |
|           32 |      412 | 2024-08-02 | Falcons           | W   | 1.000      | 0.581        | 0.250 (0.145)    | -                | 1 (1.000) |     8.51 | br0, device, jabbi, Staehr, stavn    |
|           31 |      537 | 2024-07-30 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -9.71 | br0, device, jabbi, Staehr, stavn    |
|           30 |      565 | 2024-07-29 | Falcons           | W   | 1.000      | 0.581        | 0.250 (0.145)    | -                | 1 (1.000) |     8.66 | br0, device, jabbi, Staehr, stavn    |
|           29 |     1390 | 2024-06-14 | Virtus.pro        | L   | 0.793      | -            | -                | -                | -         |   -15.22 | br0, device, jabbi, Staehr, stavn    |
|           28 |     1449 | 2024-06-13 | SAW               | W   | 0.784      | 0.729        | -                | 0.624 (0.357)    | 1 (0.784) |     3.19 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1472 | 2024-06-12 | Natus Vincere     | L   | 0.779      | -            | -                | -                | -         |    -5.17 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1630 | 2024-06-08 | The MongolZ       | L   | 0.752      | -            | -                | -                | -         |    -6.61 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1681 | 2024-06-07 | BetBoom           | W   | 0.745      | 0.715        | -                | 0.456 (0.243)    | 1 (0.745) |     3.08 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1742 | 2024-06-06 | The MongolZ       | W   | 0.739      | 0.715        | 1.000 (0.529)    | 0.738 (0.390)    | 1 (0.739) |    17.30 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1762 | 2024-06-06 | ENCE              | W   | 0.738      | 0.715        | -                | 0.393 (0.207)    | 1 (0.738) |     2.51 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1768 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.737      | -            | -                | -                | -         |   -17.33 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1813 | 2024-06-05 | Sashi             | L   | 0.732      | -            | -                | -                | -         |   -21.96 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1825 | 2024-06-05 | HEROIC            | W   | 0.730      | -            | -                | -                | 1 (0.730) |     5.72 | br0, device, jabbi, Staehr, stavn    |
|           19 |     2172 | 2024-05-22 | Liquid            | L   | 0.638      | -            | -                | -                | -         |   -10.83 | br0, device, jabbi, Staehr, stavn    |
|           18 |     2214 | 2024-05-21 | Aurora            | W   | 0.632      | 0.769        | 0.387 (0.188)    | 0.737 (0.358)    | -         |     4.57 | br0, device, jabbi, Staehr, stavn    |
|           17 |     2244 | 2024-05-20 | BetBoom           | W   | 0.626      | 0.769        | -                | 0.456 (0.219)    | -         |     1.81 | br0, device, jabbi, Staehr, stavn    |
|           16 |     2267 | 2024-05-19 | BIG               | W   | 0.620      | -            | -                | -                | -         |     1.66 | br0, device, jabbi, Staehr, stavn    |
|           15 |     2559 | 2024-05-11 | Vitality          | L   | 0.566      | -            | -                | -                | -         |    -5.67 | br0, device, jabbi, Staehr, stavn    |
|           14 |     2580 | 2024-05-10 | Liquid            | W   | 0.559      | 0.889        | 0.432 (0.215)    | 0.462 (0.229)    | 1 (0.559) |     8.20 | br0, device, jabbi, Staehr, stavn    |
|           13 |     2846 | 2024-04-27 | 3DMAX             | W   | 0.472      | 0.889        | 0.508 (0.213)    | 1.000 (0.420)    | -         |     5.08 | br0, device, jabbi, Staehr, stavn    |
|           12 |     2916 | 2024-04-24 | FaZe              | W   | 0.453      | 0.889        | 0.557 (0.224)    | -                | -         |     7.97 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2937 | 2024-04-23 | Eternal Fire      | W   | 0.446      | 0.889        | 0.701 (0.277)    | -                | -         |     6.09 | br0, device, jabbi, Staehr, stavn    |
|           10 |     3223 | 2024-04-13 | FaZe              | L   | 0.378      | -            | -                | -                | -         |    -5.38 | br0, device, jabbi, Staehr, stavn    |
|            9 |     3320 | 2024-04-10 | Virtus.pro        | W   | 0.357      | -            | -                | -                | -         |     4.36 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3372 | 2024-04-09 | FaZe              | W   | 0.351      | -            | -                | -                | -         |     6.16 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3404 | 2024-04-08 | Steel Helmet      | W   | 0.343      | -            | -                | -                | -         |     0.02 | br0, device, jabbi, Staehr, stavn    |
|            6 |     4373 | 2024-02-23 | 9 Pandas          | L   | 0.044      | -            | -                | -                | -         |    -1.37 | blameF, device, jabbi, Staehr, stavn |
|            5 |     4392 | 2024-02-22 | ENCE              | L   | 0.038      | -            | -                | -                | -         |    -0.99 | blameF, device, jabbi, Staehr, stavn |
|            4 |     4419 | 2024-02-21 | Monte             | W   | 0.031      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            3 |     4447 | 2024-02-20 | HEROIC            | L   | 0.024      | -            | -                | -                | -         |    -0.58 | blameF, device, jabbi, Staehr, stavn |
|            2 |     4460 | 2024-02-19 | Spirit            | L   | 0.020      | -            | -                | -                | -         |    -0.21 | blameF, device, jabbi, Staehr, stavn |
|            1 |     4470 | 2024-02-19 | Nexus             | W   | 0.018      | -            | -                | -                | -         |     0.01 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($131,624.84)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.41) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-13 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-08-04 |      1.000 | $12,500.00     | $12,500.00      |
| 2024-06-16 |      0.806 | $20,000.00     | $16,117.45      |
| 2024-06-09 |      0.759 | $28,000.00     | $21,258.03      |
| 2024-05-23 |      0.646 | $50,000.00     | $32,300.04      |
| 2024-05-12 |      0.572 | $45,000.00     | $25,762.00      |
| 2024-04-14 |      0.384 | $20,000.00     | $7,687.32       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
