### Roster Details<br />
Team Name: Astralis<br />
Roster: cadiaN, device, jabbi, Staehr, stavn<br />
Global Rank: [19](../../standings_global_2025_01_27.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_27.md)<br />
Regional Rank: [13]( ../../standings_europe_2025_01_27.md)<br />
<br />
Final Rank Value:  1287.7<br />
<br />
Final Rank Value (1287.7) = Starting Rank Value (1271.7) + Head To Head Adjustments (16.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.667[<sup>1</sup>](#table2)
- Bounty Collected: 0.534[<sup>2</sup>](#table1)
- Opponent Network: 0.105[<sup>2</sup>](#table1)
- LAN Wins: 0.476[<sup>2</sup>](#table1)

The average of these factors is 0.446<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1271.7
- 400 + ( ( 0.446 - 0.000 ) / ( 0.818 - 0.000 ) ) * 1600 = 1271.7


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
|           25 |      207 | 2025-01-18 | Natus Vincere     | L   | 1.000      | -            | -                | -                | -         |    -2.38 | cadiaN, device, jabbi, Staehr, stavn |
|           24 |      222 | 2025-01-15 | Wildcard          | W   | 1.000      | 0.143        | 0.238 (0.034)    | 0.640 (0.091)    | 0 (0.000) |    17.93 | cadiaN, device, jabbi, Staehr, stavn |
|           23 |      817 | 2024-11-23 | Passion UA        | L   | 0.770      | -            | -                | -                | -         |   -17.29 | br0, cadiaN, jabbi, Staehr, stavn    |
|           22 |      838 | 2024-11-23 | Eternal Fire      | W   | 0.765      | 0.143        | 0.710 (0.078)    | 0.425 (0.046)    | 1 (0.765) |    19.10 | br0, cadiaN, jabbi, Staehr, stavn    |
|           21 |      866 | 2024-11-22 | B8                | W   | 0.758      | 0.143        | 0.154 (0.017)    | 0.499 (0.054)    | 1 (0.758) |     8.53 | br0, cadiaN, jabbi, Staehr, stavn    |
|           20 |      888 | 2024-11-21 | Sashi             | L   | 0.752      | -            | -                | -                | -         |   -19.41 | br0, cadiaN, jabbi, Staehr, stavn    |
|           19 |      899 | 2024-11-20 | 9 Pandas          | L   | 0.750      | -            | -                | -                | -         |   -15.52 | br0, cadiaN, jabbi, Staehr, stavn    |
|           18 |     1318 | 2024-11-02 | Spirit            | L   | 0.626      | -            | -                | -                | -         |    -0.44 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1366 | 2024-10-31 | MOUZ              | W   | 0.611      | 1.000        | 0.656 (0.401)    | 0.482 (0.295)    | 1 (0.611) |    17.97 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1388 | 2024-10-30 | Natus Vincere     | W   | 0.604      | 1.000        | 1.000 (0.604)    | 0.623 (0.376)    | 1 (0.604) |    18.12 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1780 | 2024-10-09 | Virtus.pro        | L   | 0.466      | -            | -                | -                | -         |    -6.98 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     1815 | 2024-10-08 | Falcons           | L   | 0.460      | -            | -                | -                | -         |    -1.05 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     1839 | 2024-10-07 | Eternal Fire      | W   | 0.453      | 0.624        | 0.710 (0.201)    | 0.425 (0.120)    | 1 (0.453) |    12.40 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     2229 | 2024-09-26 | Spirit            | L   | 0.380      | -            | -                | -                | -         |    -0.21 | cadiaN, device, jabbi, Staehr, stavn |
|           11 |     2288 | 2024-09-25 | Vitality          | L   | 0.373      | -            | -                | -                | -         |    -0.78 | cadiaN, device, jabbi, Staehr, stavn |
|           10 |     2625 | 2024-09-14 | Complexity        | L   | 0.300      | -            | -                | -                | -         |    -4.38 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2667 | 2024-09-13 | Rooster           | W   | 0.293      | 0.889        | 0.012 (0.003)    | 0.194 (0.050)    | 1 (0.293) |     0.37 | br0, device, jabbi, Staehr, stavn    |
|            8 |     2728 | 2024-09-11 | Complexity        | L   | 0.280      | -            | -                | -                | -         |    -4.25 | br0, device, jabbi, Staehr, stavn    |
|            7 |     2764 | 2024-09-10 | fnatic            | L   | 0.272      | -            | -                | -                | -         |    -6.02 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3734 | 2024-08-12 | G2                | L   | 0.081      | -            | -                | -                | -         |    -0.05 | br0, device, jabbi, Staehr, stavn    |
|            5 |     3768 | 2024-08-11 | Natus Vincere     | L   | 0.073      | -            | -                | -                | -         |    -0.14 | br0, device, jabbi, Staehr, stavn    |
|            4 |     3787 | 2024-08-10 | 9z                | W   | 0.066      | 1.000        | 0.054 (0.004)    | 0.178 (0.012)    | 1 (0.066) |     0.30 | br0, device, jabbi, Staehr, stavn    |
|            3 |     3997 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.026      | 0.581        | 0.074 (0.001)    | 0.249 (0.004)    | 1 (0.026) |     0.19 | br0, device, jabbi, Staehr, stavn    |
|            2 |     4026 | 2024-08-03 | Vitality          | L   | 0.020      | -            | -                | -                | -         |    -0.04 | br0, device, jabbi, Staehr, stavn    |
|            1 |     4067 | 2024-08-02 | Falcons           | W   | 0.012      | 0.581        | 0.070 (0.001)    | 0.128 (0.001)    | 1 (0.012) |     0.05 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($64,895.00)
- Divide that value by the 5th highest value among all rosters ($204,341.08)
- The final value (0.32) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.632 | $85,000.00     | $53,687.40      |
| 2024-10-13 |      0.494 | $5,000.00      | $2,470.72       |
| 2024-09-29 |      0.400 | $10,000.00     | $4,000.40       |
| 2024-09-22 |      0.354 | $7,000.00      | $2,478.39       |
| 2024-08-18 |      0.121 | $16,000.00     | $1,930.38       |
| 2024-08-04 |      0.026 | $12,500.00     | $327.71         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
