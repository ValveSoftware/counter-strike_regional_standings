### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, device, jabbi, Staehr, stavn<br />
Global Rank: [13](../../standings_global_2024_09_11.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_09_11.md)<br />
Regional Rank: [10]( ../../standings_europe_2024_09_11.md)<br />
<br />
Final Rank Value:  1515.1<br />
<br />
Final Rank Value (1515.1) = Starting Rank Value (1493.5) + Head To Head Adjustments (21.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.682[<sup>1</sup>](#table2)
- Bounty Collected: 0.582[<sup>2</sup>](#table1)
- Opponent Network: 0.262[<sup>2</sup>](#table1)
- LAN Wins: 0.726[<sup>2</sup>](#table1)

The average of these factors is 0.563<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1493.5
- 400 + ( ( 0.563 - 0.000 ) / ( 0.824 - 0.000 ) ) * 1600 = 1493.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                            |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           33 |        1 | 2024-09-11 | Complexity        | L   | 1.000      | -            | -                | -                | -         |   -17.03 | br0, device, jabbi, Staehr, stavn |
|           32 |       37 | 2024-09-10 | fnatic            | L   | 1.000      | -            | -                | -                | -         |   -24.73 | br0, device, jabbi, Staehr, stavn |
|           31 |     1007 | 2024-08-12 | G2                | L   | 1.000      | -            | -                | -                | -         |    -2.91 | br0, device, jabbi, Staehr, stavn |
|           30 |     1041 | 2024-08-11 | Natus Vincere     | L   | 0.993      | -            | -                | -                | -         |    -3.22 | br0, device, jabbi, Staehr, stavn |
|           29 |     1060 | 2024-08-10 | 9z                | W   | 0.986      | 1.000        | 0.362 (0.357)    | 0.507 (0.500)    | 1 (0.986) |    10.34 | br0, device, jabbi, Staehr, stavn |
|           28 |     1270 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.946      | 0.581        | 0.232 (0.127)    | 0.408 (0.224)    | 1 (0.946) |    10.31 | br0, device, jabbi, Staehr, stavn |
|           27 |     1299 | 2024-08-03 | Vitality          | L   | 0.940      | -            | -                | -                | -         |    -3.50 | br0, device, jabbi, Staehr, stavn |
|           26 |     1340 | 2024-08-02 | Falcons           | W   | 0.933      | 0.581        | 0.300 (0.163)    | 0.465 (0.252)    | 1 (0.933) |    12.34 | br0, device, jabbi, Staehr, stavn |
|           25 |     1465 | 2024-07-30 | Vitality          | L   | 0.913      | -            | -                | -                | -         |    -3.31 | br0, device, jabbi, Staehr, stavn |
|           24 |     1493 | 2024-07-29 | Falcons           | W   | 0.907      | 0.581        | 0.300 (0.158)    | 0.465 (0.245)    | 1 (0.907) |    12.77 | br0, device, jabbi, Staehr, stavn |
|           23 |     2318 | 2024-06-14 | Virtus.pro        | L   | 0.607      | -            | -                | -                | -         |    -8.61 | br0, device, jabbi, Staehr, stavn |
|           22 |     2377 | 2024-06-13 | SAW               | W   | 0.599      | 0.729        | 0.337 (0.147)    | 0.760 (0.332)    | 1 (0.599) |     6.80 | br0, device, jabbi, Staehr, stavn |
|           21 |     2400 | 2024-06-12 | Natus Vincere     | L   | 0.593      | -            | -                | -                | -         |    -1.51 | br0, device, jabbi, Staehr, stavn |
|           20 |     2558 | 2024-06-08 | The MongolZ       | L   | 0.566      | -            | -                | -                | -         |    -2.52 | br0, device, jabbi, Staehr, stavn |
|           19 |     2609 | 2024-06-07 | BetBoom           | W   | 0.560      | 0.715        | -                | 0.511 (0.205)    | 1 (0.560) |     3.39 | br0, device, jabbi, Staehr, stavn |
|           18 |     2670 | 2024-06-06 | The MongolZ       | W   | 0.553      | 0.715        | 0.863 (0.342)    | 0.666 (0.264)    | 1 (0.553) |    15.24 | br0, device, jabbi, Staehr, stavn |
|           17 |     2690 | 2024-06-06 | ENCE              | W   | 0.552      | -            | -                | -                | 1 (0.552) |     2.44 | br0, device, jabbi, Staehr, stavn |
|           16 |     2696 | 2024-06-06 | Ninjas in Pyjamas | L   | 0.551      | -            | -                | -                | -         |   -11.52 | br0, device, jabbi, Staehr, stavn |
|           15 |     2741 | 2024-06-05 | Sashi             | L   | 0.546      | -            | -                | -                | -         |   -15.69 | br0, device, jabbi, Staehr, stavn |
|           14 |     2753 | 2024-06-05 | HEROIC            | W   | 0.544      | -            | -                | -                | 1 (0.544) |     7.09 | br0, device, jabbi, Staehr, stavn |
|           13 |     3100 | 2024-05-22 | Liquid            | L   | 0.452      | -            | -                | -                | -         |    -5.80 | br0, device, jabbi, Staehr, stavn |
|           12 |     3142 | 2024-05-21 | Aurora            | W   | 0.446      | 0.769        | -                | 0.571 (0.196)    | -         |     4.02 | br0, device, jabbi, Staehr, stavn |
|           11 |     3172 | 2024-05-20 | BetBoom           | W   | 0.440      | 0.769        | -                | 0.511 (0.173)    | -         |     2.11 | br0, device, jabbi, Staehr, stavn |
|           10 |     3195 | 2024-05-19 | BIG               | W   | 0.434      | -            | -                | -                | -         |     2.39 | br0, device, jabbi, Staehr, stavn |
|            9 |     3487 | 2024-05-11 | Vitality          | L   | 0.380      | -            | -                | -                | -         |    -1.08 | br0, device, jabbi, Staehr, stavn |
|            8 |     3508 | 2024-05-10 | Liquid            | W   | 0.373      | 0.889        | 0.369 (0.122)    | -                | 1 (0.373) |     7.18 | br0, device, jabbi, Staehr, stavn |
|            7 |     3774 | 2024-04-27 | 3DMAX             | W   | 0.286      | 0.889        | 0.512 (0.130)    | 0.913 (0.232)    | -         |     6.66 | br0, device, jabbi, Staehr, stavn |
|            6 |     3844 | 2024-04-24 | FaZe              | W   | 0.267      | 0.889        | 0.578 (0.137)    | -                | -         |     6.67 | br0, device, jabbi, Staehr, stavn |
|            5 |     3865 | 2024-04-23 | Eternal Fire      | W   | 0.260      | 0.889        | 0.978 (0.226)    | -                | -         |     7.24 | br0, device, jabbi, Staehr, stavn |
|            4 |     4151 | 2024-04-13 | FaZe              | L   | 0.192      | -            | -                | -                | -         |    -1.24 | br0, device, jabbi, Staehr, stavn |
|            3 |     4248 | 2024-04-10 | Virtus.pro        | W   | 0.171      | -            | -                | -                | -         |     3.18 | br0, device, jabbi, Staehr, stavn |
|            2 |     4300 | 2024-04-09 | FaZe              | W   | 0.165      | -            | -                | -                | -         |     4.17 | br0, device, jabbi, Staehr, stavn |
|            1 |     4332 | 2024-04-08 | Steel Helmet      | W   | 0.157      | -            | -                | -                | -         |     0.02 | br0, device, jabbi, Staehr, stavn |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($100,665.91)
- Divide that value by the 5th highest value among all rosters ($294,714.87)
- The final value (0.34) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-08-18 |      1.000 | $16,000.00     | $16,000.00      |
| 2024-08-04 |      0.946 | $12,500.00     | $11,829.05      |
| 2024-06-16 |      0.620 | $20,000.00     | $12,401.14      |
| 2024-06-09 |      0.573 | $28,000.00     | $16,055.19      |
| 2024-05-23 |      0.460 | $50,000.00     | $23,009.24      |
| 2024-05-12 |      0.387 | $45,000.00     | $17,400.28      |
| 2024-04-14 |      0.199 | $20,000.00     | $3,971.00       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
