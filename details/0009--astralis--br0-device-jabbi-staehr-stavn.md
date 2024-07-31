### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Global Rank: [9](../standings_global.md)<br />
<br />
Region: [Europe]( ../standings_europe.md)<br />
Regional Rank: [8]( ../standings_europe.md)<br />
<br />
Final Rank Value:  1677.7<br />
<br />
Final Rank Value (1677.7) = Starting Rank Value (1697.2) + Head To Head Adjustments (-19.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.693[<sup>1</sup>](#table2)
- Bounty Collected: 0.629[<sup>2</sup>](#table1)
- Opponent Network: 0.330[<sup>2</sup>](#table1)
- LAN Wins: 0.862[<sup>2</sup>](#table1)

The average of these factors is 0.628<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1697.2
- 400 + ( ( 0.628 - 0.000 ) / ( 0.775 - 0.000 ) ) * 1600 = 1697.2


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
|           31 |       56 | 2024-07-30 | Vitality          | L   | 1.000      | -            | -                | -                | -         |    -9.25 | br0, device, jabbi, Staehr, stavn    |
|           30 |       84 | 2024-07-29 | Falcons           | W   | 1.000      | -            | -                | -                | 1 (1.000) |     6.82 | br0, device, jabbi, Staehr, stavn    |
|           29 |      909 | 2024-06-14 | Virtus.pro        | L   | 0.887      | -            | -                | -                | -         |   -14.27 | br0, device, jabbi, Staehr, stavn    |
|           28 |      968 | 2024-06-13 | SAW               | W   | 0.878      | 0.729        | -                | 0.545 (0.349)    | 1 (0.878) |     1.48 | br0, device, jabbi, Staehr, stavn    |
|           27 |      991 | 2024-06-12 | Natus Vincere     | L   | 0.872      | -            | -                | -                | -         |    -5.86 | br0, device, jabbi, Staehr, stavn    |
|           26 |     1149 | 2024-06-08 | The MongolZ       | L   | 0.845      | -            | -                | -                | -         |    -6.83 | br0, device, jabbi, Staehr, stavn    |
|           25 |     1200 | 2024-06-07 | BetBoom           | W   | 0.839      | 0.715        | 0.259 (0.155)    | 0.554 (0.332)    | 1 (0.839) |     4.85 | br0, device, jabbi, Staehr, stavn    |
|           24 |     1261 | 2024-06-06 | The MongolZ       | W   | 0.832      | 0.715        | 1.000 (0.595)    | 0.719 (0.428)    | 1 (0.832) |    20.12 | br0, device, jabbi, Staehr, stavn    |
|           23 |     1281 | 2024-06-06 | ENCE              | W   | 0.831      | 0.715        | -                | 0.404 (0.240)    | 1 (0.831) |     3.67 | br0, device, jabbi, Staehr, stavn    |
|           22 |     1287 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.830      | -            | -                | -                | -         |   -18.22 | br0, device, jabbi, Staehr, stavn    |
|           21 |     1332 | 2024-06-05 | Sashi             | L   | 0.825      | -            | -                | -                | -         |   -24.51 | br0, device, jabbi, Staehr, stavn    |
|           20 |     1344 | 2024-06-05 | HEROIC            | W   | 0.823      | 0.715        | -                | 0.382 (0.225)    | 1 (0.823) |     8.42 | br0, device, jabbi, Staehr, stavn    |
|           19 |     1691 | 2024-05-22 | Liquid            | L   | 0.731      | -            | -                | -                | -         |   -18.08 | br0, device, jabbi, Staehr, stavn    |
|           18 |     1733 | 2024-05-21 | Aurora            | W   | 0.725      | 0.769        | 0.433 (0.241)    | 0.800 (0.445)    | -         |     6.41 | br0, device, jabbi, Staehr, stavn    |
|           17 |     1763 | 2024-05-20 | BetBoom           | W   | 0.719      | 0.769        | 0.259 (0.143)    | 0.554 (0.306)    | -         |     3.05 | br0, device, jabbi, Staehr, stavn    |
|           16 |     1786 | 2024-05-19 | BIG               | W   | 0.713      | -            | -                | -                | -         |     1.45 | br0, device, jabbi, Staehr, stavn    |
|           15 |     2078 | 2024-05-11 | Vitality          | L   | 0.659      | -            | -                | -                | -         |    -6.55 | br0, device, jabbi, Staehr, stavn    |
|           14 |     2099 | 2024-05-10 | Liquid            | W   | 0.652      | 0.889        | 0.323 (0.187)    | 0.430 (0.249)    | 1 (0.652) |     4.07 | br0, device, jabbi, Staehr, stavn    |
|           13 |     2365 | 2024-04-27 | 3DMAX             | W   | 0.565      | 0.889        | 0.504 (0.253)    | 1.000 (0.503)    | 1 (0.565) |     6.92 | br0, device, jabbi, Staehr, stavn    |
|           12 |     2435 | 2024-04-24 | FaZe              | W   | 0.546      | 0.889        | 0.643 (0.312)    | -                | 1 (0.546) |     9.57 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2456 | 2024-04-23 | Eternal Fire      | W   | 0.539      | 0.889        | 0.759 (0.364)    | 0.462 (0.221)    | 1 (0.539) |     9.06 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2742 | 2024-04-13 | FaZe              | L   | 0.471      | -            | -                | -                | -         |    -6.75 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2839 | 2024-04-10 | Virtus.pro        | W   | 0.450      | 0.624        | 0.483 (0.136)    | -                | -         |     7.53 | br0, device, jabbi, Staehr, stavn    |
|            8 |     2891 | 2024-04-09 | FaZe              | W   | 0.444      | 0.624        | 0.643 (0.178)    | -                | -         |     7.87 | br0, device, jabbi, Staehr, stavn    |
|            7 |     2923 | 2024-04-08 | Steel Helmet      | W   | 0.437      | -            | -                | -                | -         |     0.03 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3892 | 2024-02-23 | 9 Pandas          | L   | 0.138      | -            | -                | -                | -         |    -4.24 | blameF, device, jabbi, Staehr, stavn |
|            5 |     3911 | 2024-02-22 | ENCE              | L   | 0.131      | -            | -                | -                | -         |    -3.13 | blameF, device, jabbi, Staehr, stavn |
|            4 |     3938 | 2024-02-21 | Monte             | W   | 0.125      | -            | -                | -                | -         |     0.09 | blameF, device, jabbi, Staehr, stavn |
|            3 |     3966 | 2024-02-20 | HEROIC            | L   | 0.118      | -            | -                | -                | -         |    -2.42 | blameF, device, jabbi, Staehr, stavn |
|            2 |     3979 | 2024-02-19 | Spirit            | L   | 0.113      | -            | -                | -                | -         |    -0.81 | blameF, device, jabbi, Staehr, stavn |
|            1 |     3989 | 2024-02-19 | Nexus             | W   | 0.111      | -            | -                | -                | -         |     0.03 | blameF, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($118,323.55)
- Divide that value by the 5th highest value among all rosters ($328,832.91)
- The final value (0.36) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-06-16 |      0.899 | $20,000.00     | $17,982.33      |
| 2024-06-09 |      0.852 | $28,000.00     | $23,868.85      |
| 2024-05-23 |      0.739 | $50,000.00     | $36,962.22      |
| 2024-05-12 |      0.666 | $45,000.00     | $29,957.96      |
| 2024-04-14 |      0.478 | $20,000.00     | $9,552.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
