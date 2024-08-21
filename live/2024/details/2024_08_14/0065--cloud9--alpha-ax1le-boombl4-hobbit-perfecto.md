### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [65](../../standings_global_2024_08_14.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_14.md)<br />
Regional Rank: [45]( ../../standings_europe_2024_08_14.md)<br />
<br />
Final Rank Value:  974.1<br />
<br />
Final Rank Value (974.1) = Starting Rank Value (942.6) + Head To Head Adjustments (31.5)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.436[<sup>1</sup>](#table2)
- Bounty Collected: 0.435[<sup>2</sup>](#table1)
- Opponent Network: 0.037[<sup>2</sup>](#table1)
- LAN Wins: 0.192[<sup>2</sup>](#table1)

The average of these factors is 0.275<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 942.6
- 400 + ( ( 0.275 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 942.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                       |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           19 |     3006 | 2024-04-20 | Sashi             | L   | 0.425      | -            | -                | -                | -         |    -4.41 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           18 |     3037 | 2024-04-19 | BetBoom           | W   | 0.420      | 0.143        | 0.223 (0.013)    | 0.456 (0.027)    | -         |    11.56 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           17 |     3051 | 2024-04-19 | Sashi             | L   | 0.419      | -            | -                | -                | -         |    -4.29 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           16 |     3326 | 2024-04-10 | FaZe              | L   | 0.356      | -            | -                | -                | -         |    -0.17 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     3376 | 2024-04-08 | Wildcard          | W   | 0.349      | 0.624        | 0.005 (0.001)    | -                | 1 (0.349) |     0.95 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3406 | 2024-04-08 | FlyQuest          | L   | 0.343      | -            | -                | -                | -         |    -3.74 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3629 | 2024-03-28 | Vitality          | L   | 0.273      | -            | -                | -                | -         |    -0.07 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3712 | 2024-03-23 | Natus Vincere     | W   | 0.240      | 1.000        | 1.000 (0.240)    | 0.415 (0.100)    | 1 (0.240) |     7.54 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3736 | 2024-03-22 | G2                | W   | 0.231      | 1.000        | 1.000 (0.231)    | 0.525 (0.121)    | 1 (0.231) |     7.26 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3747 | 2024-03-21 | Gaimin Gladiators | W   | 0.226      | 1.000        | 0.032 (0.007)    | 0.326 (0.074)    | 1 (0.226) |     3.21 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3755 | 2024-03-21 | Spirit            | L   | 0.225      | -            | -                | -                | -         |    -0.06 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3803 | 2024-03-18 | SAW               | W   | 0.206      | 0.143        | 0.094 (0.003)    | 0.624 (0.018)    | 1 (0.206) |     6.15 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3821 | 2024-03-17 | Legacy            | W   | 0.200      | 0.143        | 0.114 (0.003)    | 0.591 (0.017)    | 1 (0.200) |     3.34 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3839 | 2024-03-17 | Gaimin Gladiators | W   | 0.198      | 0.143        | 0.032 (0.001)    | 0.326 (0.009)    | 1 (0.198) |     2.80 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     4047 | 2024-03-08 | SAW               | L   | 0.140      | -            | -                | -                | -         |    -0.22 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     4113 | 2024-03-06 | Rare Atom         | W   | 0.125      | 0.535        | 0.002 (0.000)    | -                | -         |     0.37 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4444 | 2024-02-20 | Vitality          | W   | 0.025      | 0.143        | 0.606 (0.002)    | 0.424 (0.002)    | 1 (0.025) |     0.79 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4462 | 2024-02-19 | Apeks             | W   | 0.020      | 0.143        | -                | 0.135 (0.000)    | 1 (0.020) |     0.22 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4471 | 2024-02-19 | ex-PERA           | W   | 0.018      | 0.143        | -                | 0.449 (0.001)    | 1 (0.018) |     0.26 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($16,271.25)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.05) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.384 | $5,000.00      | $1,921.83       |
| 2024-03-31 |      0.293 | $45,000.00     | $13,197.23      |
| 2024-03-10 |      0.154 | $7,500.00      | $1,152.19       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
