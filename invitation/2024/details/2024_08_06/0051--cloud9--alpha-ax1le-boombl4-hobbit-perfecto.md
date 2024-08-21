### Roster Details<br />
Team Name: Cloud9<br />
Roster: alpha, Ax1Le, Boombl4, HObbit, Perfecto<br />
Global Rank: [51](../../standings_global_2024_08_06.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_08_06.md)<br />
Regional Rank: [38]( ../../standings_europe_2024_08_06.md)<br />
<br />
Final Rank Value:  1056.0<br />
<br />
Final Rank Value (1056.0) = Starting Rank Value (1021.5) + Head To Head Adjustments (34.4)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.451[<sup>1</sup>](#table2)
- Bounty Collected: 0.454[<sup>2</sup>](#table1)
- Opponent Network: 0.043[<sup>2</sup>](#table1)
- LAN Wins: 0.261[<sup>2</sup>](#table1)

The average of these factors is 0.302<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1021.5
- 400 + ( ( 0.302 - 0.000 ) / ( 0.778 - 0.000 ) ) * 1600 = 1021.5


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
|           19 |     2733 | 2024-04-20 | Sashi             | L   | 0.479      | -            | -                | -                | -         |    -5.93 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           18 |     2764 | 2024-04-19 | BetBoom           | W   | 0.474      | 0.143        | 0.248 (0.017)    | 0.513 (0.035)    | -         |    13.08 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           17 |     2778 | 2024-04-19 | Sashi             | L   | 0.473      | -            | -                | -                | -         |    -5.81 | alpha, Ax1Le, Boombl4, HObbit, Perfecto      |
|           16 |     3053 | 2024-04-10 | FaZe              | L   | 0.410      | -            | -                | -                | -         |    -0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           15 |     3103 | 2024-04-08 | Wildcard          | W   | 0.404      | 0.624        | 0.005 (0.001)    | -                | 1 (0.404) |     0.74 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           14 |     3133 | 2024-04-08 | FlyQuest          | L   | 0.397      | -            | -                | -                | -         |    -4.58 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           13 |     3356 | 2024-03-28 | Vitality          | L   | 0.327      | -            | -                | -                | -         |    -0.12 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           12 |     3439 | 2024-03-23 | Natus Vincere     | W   | 0.294      | 1.000        | 1.000 (0.294)    | 0.357 (0.105)    | 1 (0.294) |     9.22 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           11 |     3463 | 2024-03-22 | G2                | W   | 0.285      | 1.000        | 1.000 (0.285)    | 0.478 (0.136)    | 1 (0.285) |     8.94 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|           10 |     3474 | 2024-03-21 | Gaimin Gladiators | W   | 0.281      | 1.000        | 0.037 (0.010)    | 0.331 (0.093)    | 1 (0.281) |     3.78 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            9 |     3482 | 2024-03-21 | Spirit            | L   | 0.280      | -            | -                | -                | -         |    -0.07 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            8 |     3530 | 2024-03-18 | SAW               | W   | 0.260      | 0.143        | 0.104 (0.004)    | 0.516 (0.019)    | 1 (0.260) |     5.65 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            7 |     3548 | 2024-03-17 | Legacy            | W   | 0.254      | 0.143        | 0.122 (0.004)    | 0.621 (0.023)    | 1 (0.254) |     3.97 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            6 |     3566 | 2024-03-17 | Gaimin Gladiators | W   | 0.252      | 0.143        | 0.037 (0.001)    | 0.331 (0.012)    | 1 (0.252) |     3.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            5 |     3774 | 2024-03-08 | SAW               | L   | 0.194      | -            | -                | -                | -         |    -1.90 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            4 |     3840 | 2024-03-06 | Rare Atom         | W   | 0.180      | -            | -                | -                | -         |     0.36 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            3 |     4171 | 2024-02-20 | Vitality          | W   | 0.079      | 0.143        | 0.647 (0.007)    | 0.366 (0.004)    | 1 (0.079) |     2.48 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            2 |     4189 | 2024-02-19 | Apeks             | W   | 0.074      | 0.143        | -                | 0.154 (0.002)    | 1 (0.074) |     0.77 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |
|            1 |     4198 | 2024-02-19 | PERA              | W   | 0.072      | 0.143        | 0.047 (0.000)    | 0.435 (0.004)    | 1 (0.072) |     0.85 | Ax1Le, Boombl4, electroNic, HObbit, Perfecto |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($19,380.81)
- Divide that value by the 5th highest value among all rosters ($320,194.86)
- The final value (0.06) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-04-14 |      0.438 | $5,000.00      | $2,192.23       |
| 2024-03-31 |      0.347 | $45,000.00     | $15,630.80      |
| 2024-03-10 |      0.208 | $7,500.00      | $1,557.78       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
