### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, cadiaN, jabbi, Staehr, stavn<br />
Global Rank: [20](../../standings_global_2025_01_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_06.md)<br />
Regional Rank: [14]( ../../standings_europe_2025_01_06.md)<br />
<br />
Final Rank Value:  1317.9<br />
<br />
Final Rank Value (1317.9) = Starting Rank Value (1329.6) + Head To Head Adjustments (-11.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.667[<sup>1</sup>](#table2)
- Bounty Collected: 0.547[<sup>2</sup>](#table1)
- Opponent Network: 0.110[<sup>2</sup>](#table1)
- LAN Wins: 0.557[<sup>2</sup>](#table1)

The average of these factors is 0.470<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1329.6
- 400 + ( ( 0.470 - 0.000 ) / ( 0.809 - 0.000 ) ) * 1600 = 1329.6


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
|           25 |      560 | 2024-11-23 | Passion UA        | L   | 0.911      | -            | -                | -                | -         |   -21.19 | br0, cadiaN, jabbi, Staehr, stavn    |
|           24 |      581 | 2024-11-23 | Eternal Fire      | W   | 0.906      | 0.143        | 0.354 (0.046)    | 0.312 (0.040)    | 1 (0.906) |    16.72 | br0, cadiaN, jabbi, Staehr, stavn    |
|           23 |      609 | 2024-11-22 | B8                | W   | 0.899      | 0.143        | 0.162 (0.021)    | 0.556 (0.071)    | 1 (0.899) |     9.62 | br0, cadiaN, jabbi, Staehr, stavn    |
|           22 |      631 | 2024-11-21 | Sashi             | L   | 0.892      | -            | -                | -                | -         |   -23.64 | br0, cadiaN, jabbi, Staehr, stavn    |
|           21 |      642 | 2024-11-20 | 9 Pandas          | L   | 0.891      | -            | -                | -                | -         |   -19.16 | br0, cadiaN, jabbi, Staehr, stavn    |
|           20 |     1061 | 2024-11-02 | Spirit            | L   | 0.766      | -            | -                | -                | -         |    -0.79 | cadiaN, device, jabbi, Staehr, stavn |
|           19 |     1109 | 2024-10-31 | MOUZ              | W   | 0.752      | 1.000        | 0.666 (0.500)    | 0.480 (0.361)    | 1 (0.752) |    21.94 | cadiaN, device, jabbi, Staehr, stavn |
|           18 |     1131 | 2024-10-30 | Natus Vincere     | W   | 0.744      | 1.000        | 1.000 (0.744)    | 0.491 (0.366)    | 1 (0.744) |    22.12 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1523 | 2024-10-09 | Virtus.pro        | L   | 0.607      | -            | -                | -                | -         |    -8.85 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1558 | 2024-10-08 | HEROIC            | L   | 0.601      | -            | -                | -                | -         |    -1.79 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1582 | 2024-10-07 | Eternal Fire      | W   | 0.594      | 0.624        | 0.354 (0.131)    | 0.312 (0.116)    | 1 (0.594) |    13.13 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     1972 | 2024-09-26 | Spirit            | L   | 0.520      | -            | -                | -                | -         |    -0.41 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     2031 | 2024-09-25 | Vitality          | L   | 0.513      | -            | -                | -                | -         |    -0.81 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     2368 | 2024-09-14 | Complexity        | L   | 0.440      | -            | -                | -                | -         |    -5.95 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2410 | 2024-09-13 | Rooster           | W   | 0.433      | 0.889        | 0.012 (0.005)    | 0.144 (0.055)    | 1 (0.433) |     0.40 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2471 | 2024-09-11 | Complexity        | L   | 0.420      | -            | -                | -                | -         |    -6.00 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2507 | 2024-09-10 | fnatic            | L   | 0.413      | -            | -                | -                | -         |    -9.28 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3477 | 2024-08-12 | G2                | L   | 0.221      | -            | -                | -                | -         |    -0.16 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3511 | 2024-08-11 | Natus Vincere     | L   | 0.213      | -            | -                | -                | -         |    -0.52 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3530 | 2024-08-10 | 9z                | W   | 0.207      | 1.000        | 0.059 (0.012)    | 0.201 (0.042)    | 1 (0.207) |     0.91 | br0, device, jabbi, Staehr, stavn    |
|            5 |     3740 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.166      | 0.581        | 0.079 (0.008)    | 0.256 (0.025)    | 1 (0.166) |     1.30 | br0, device, jabbi, Staehr, stavn    |
|            4 |     3769 | 2024-08-03 | Vitality          | L   | 0.160      | -            | -                | -                | -         |    -0.29 | br0, device, jabbi, Staehr, stavn    |
|            3 |     3810 | 2024-08-02 | Falcons           | W   | 0.153      | 0.581        | 0.090 (0.008)    | 0.175 (0.016)    | 1 (0.153) |     0.69 | br0, device, jabbi, Staehr, stavn    |
|            2 |     3935 | 2024-07-30 | Vitality          | L   | 0.133      | -            | -                | -                | -         |    -0.24 | br0, device, jabbi, Staehr, stavn    |
|            1 |     3963 | 2024-07-29 | Falcons           | W   | 0.128      | 0.581        | 0.090 (0.007)    | 0.175 (0.013)    | 1 (0.128) |     0.57 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($83,915.53)
- Divide that value by the 5th highest value among all rosters ($265,541.19)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.772 | $85,000.00     | $65,619.10      |
| 2024-10-13 |      0.635 | $5,000.00      | $3,172.58       |
| 2024-09-29 |      0.540 | $10,000.00     | $5,404.13       |
| 2024-09-22 |      0.494 | $7,000.00      | $3,461.00       |
| 2024-08-18 |      0.261 | $16,000.00     | $4,176.34       |
| 2024-08-04 |      0.167 | $12,500.00     | $2,082.37       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
