### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Region: [Europe]( ../standings_europe.md)<br />
<br />
Global Rank: [8](../standings_global.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
Final Rank Value:  1700.2<br />
<br />
Final Rank Value (1700.2) = Starting Rank Value (1737.4) + Head To Head Adjustments (-37.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.746[<sup>1</sup>](#table2)
- Bounty Collected: 0.659[<sup>2</sup>](#table1)
- Opponent Network: 0.359[<sup>2</sup>](#table1)
- LAN Wins: 0.878[<sup>2</sup>](#table1)

The average of these factors is 0.661<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1737.4
- 400 + ( ( 0.661 - 0.000 ) / ( 0.790 - 0.000 ) ) * 1600 = 1737.4


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
|           33 |      667 | 2024-06-14 | Virtus.pro        | L   | 0.934      | -            | -                | -                | -         |   -13.92 | br0, device, jabbi, Staehr, stavn    |
|           32 |      726 | 2024-06-13 | SAW               | W   | 0.925      | 0.729        | -                | 0.500 (0.337)    | 1 (0.925) |     1.28 | br0, device, jabbi, Staehr, stavn    |
|           31 |      749 | 2024-06-12 | Natus Vincere     | L   | 0.919      | -            | -                | -                | -         |    -6.67 | br0, device, jabbi, Staehr, stavn    |
|           30 |      907 | 2024-06-08 | The MongolZ       | L   | 0.893      | -            | -                | -                | -         |    -9.20 | br0, device, jabbi, Staehr, stavn    |
|           29 |      958 | 2024-06-07 | BetBoom           | W   | 0.886      | 0.715        | 0.333 (0.211)    | 0.642 (0.407)    | 1 (0.886) |     5.04 | br0, device, jabbi, Staehr, stavn    |
|           28 |     1019 | 2024-06-06 | The MongolZ       | W   | 0.880      | 0.715        | 1.000 (0.629)    | 0.725 (0.456)    | 1 (0.880) |    19.27 | br0, device, jabbi, Staehr, stavn    |
|           27 |     1039 | 2024-06-06 | ENCE              | W   | 0.878      | 0.715        | -                | 0.380 (0.239)    | 1 (0.878) |     2.61 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1045 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.878      | -            | -                | -                | -         |   -18.50 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1090 | 2024-06-05 | Sashi             | L   | 0.872      | -            | -                | -                | -         |   -26.10 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1102 | 2024-06-05 | HEROIC            | W   | 0.871      | 0.715        | 0.272 (0.170)    | 0.404 (0.251)    | 1 (0.871) |     9.07 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1449 | 2024-05-22 | Liquid            | L   | 0.779      | -            | -                | -                | -         |   -19.86 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1491 | 2024-05-21 | Aurora            | W   | 0.772      | 0.769        | 0.423 (0.251)    | 0.783 (0.465)    | -         |     4.40 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1521 | 2024-05-20 | BetBoom           | W   | 0.767      | 0.769        | 0.333 (0.196)    | 0.642 (0.378)    | -         |     3.09 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1544 | 2024-05-19 | BIG               | W   | 0.760      | -            | -                | -                | -         |     1.71 | br0, device, jabbi, Staehr, stavn    |
|           19 |     1836 | 2024-05-11 | Vitality          | L   | 0.706      | -            | -                | -                | -         |    -7.05 | br0, device, jabbi, Staehr, stavn    |
|           18 |     1857 | 2024-05-10 | Liquid            | W   | 0.699      | 0.889        | 0.411 (0.255)    | 0.459 (0.285)    | 1 (0.699) |     3.79 | br0, device, jabbi, Staehr, stavn    |
|           17 |     2123 | 2024-04-27 | 3DMAX             | W   | 0.613      | 0.889        | -                | 1.000 (0.545)    | 1 (0.613) |     1.07 | br0, device, jabbi, Staehr, stavn    |
|           16 |     2193 | 2024-04-24 | FaZe              | W   | 0.593      | 0.889        | 0.854 (0.451)    | -                | 1 (0.593) |    10.97 | br0, device, jabbi, Staehr, stavn    |
|           15 |     2214 | 2024-04-23 | Eternal Fire      | W   | 0.586      | 0.889        | 0.833 (0.434)    | 0.443 (0.231)    | 1 (0.586) |     7.54 | br0, device, jabbi, Staehr, stavn    |
|           14 |     2500 | 2024-04-13 | FaZe              | L   | 0.518      | -            | -                | -                | -         |    -6.95 | br0, device, jabbi, Staehr, stavn    |
|           13 |     2597 | 2024-04-10 | Virtus.pro        | W   | 0.498      | 0.624        | 0.595 (0.185)    | -                | 1 (0.498) |     8.89 | br0, device, jabbi, Staehr, stavn    |
|           12 |     2649 | 2024-04-09 | FaZe              | W   | 0.491      | 0.624        | 0.854 (0.262)    | -                | -         |     9.22 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2681 | 2024-04-08 | Steel Helmet      | W   | 0.484      | -            | -                | -                | -         |     0.02 | br0, device, jabbi, Staehr, stavn    |
|           10 |     3650 | 2024-02-23 | 9 Pandas          | L   | 0.185      | -            | -                | -                | -         |    -5.70 | blameF, device, jabbi, Staehr, stavn |
|            9 |     3669 | 2024-02-22 | ENCE              | L   | 0.178      | -            | -                | -                | -         |    -4.80 | blameF, device, jabbi, Staehr, stavn |
|            8 |     3696 | 2024-02-21 | Monte             | W   | 0.172      | -            | -                | -                | -         |     0.12 | blameF, device, jabbi, Staehr, stavn |
|            7 |     3724 | 2024-02-20 | HEROIC            | L   | 0.165      | -            | -                | -                | -         |    -3.44 | blameF, device, jabbi, Staehr, stavn |
|            6 |     3737 | 2024-02-19 | Spirit            | L   | 0.161      | -            | -                | -                | -         |    -1.36 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3747 | 2024-02-19 | Nexus             | W   | 0.159      | -            | -                | -                | -         |     0.04 | blameF, device, jabbi, Staehr, stavn |
|            4 |     4105 | 2024-02-01 | ENCE              | L   | 0.041      | -            | -                | -                | -         |    -1.10 | blameF, device, jabbi, Staehr, stavn |
|            3 |     4134 | 2024-01-31 | HEROIC            | L   | 0.032      | -            | -                | -                | -         |    -0.68 | blameF, device, jabbi, Staehr, stavn |
|            2 |     4171 | 2024-01-28 | BIG               | W   | 0.013      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |
|            1 |     4187 | 2024-01-27 | Vitality          | L   | 0.005      | -            | -                | -                | -         |    -0.05 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($126,319.09)
- Divide that value by the 5th highest value among all rosters ($276,334.18)
- The final value (0.46) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.946 | $20,000.00     | $18,928.08      |
| 2024-06-09 |      0.900 | $28,000.00     | $25,192.91      |
| 2024-05-23 |      0.787 | $50,000.00     | $39,326.60      |
| 2024-05-12 |      0.713 | $45,000.00     | $32,085.90      |
| 2024-04-14 |      0.525 | $20,000.00     | $10,497.94      |
| 2024-02-02 |      0.048 | $2,500.00      | $119.13         |
| 2024-01-28 |      0.013 | $12,500.00     | $168.52         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
