### Roster Details<br />
Team Name: Astralis<br />
Roster: br0, cadiaN, jabbi, Staehr, stavn<br />
Global Rank: [20](../../standings_global_2024_12_31.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2024_12_31.md)<br />
Regional Rank: [14]( ../../standings_europe_2024_12_31.md)<br />
<br />
Final Rank Value:  1330.4<br />
<br />
Final Rank Value (1330.4) = Starting Rank Value (1343.6) + Head To Head Adjustments (-13.3)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.660[<sup>1</sup>](#table2)
- Bounty Collected: 0.555[<sup>2</sup>](#table1)
- Opponent Network: 0.130[<sup>2</sup>](#table1)
- LAN Wins: 0.592[<sup>2</sup>](#table1)

The average of these factors is 0.484<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 1343.6
- 400 + ( ( 0.484 - 0.000 ) / ( 0.821 - 0.000 ) ) * 1600 = 1343.6


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
|           25 |      545 | 2024-11-23 | Passion UA        | L   | 0.963      | -            | -                | -                | -         |   -22.84 | br0, cadiaN, jabbi, Staehr, stavn    |
|           24 |      566 | 2024-11-23 | Eternal Fire      | W   | 0.958      | 0.143        | 0.360 (0.049)    | 0.349 (0.048)    | 1 (0.958) |    18.11 | br0, cadiaN, jabbi, Staehr, stavn    |
|           23 |      594 | 2024-11-22 | B8                | W   | 0.951      | 0.143        | 0.159 (0.022)    | 0.621 (0.084)    | 1 (0.951) |    10.13 | br0, cadiaN, jabbi, Staehr, stavn    |
|           22 |      616 | 2024-11-21 | Sashi             | L   | 0.945      | -            | -                | -                | -         |   -25.19 | br0, cadiaN, jabbi, Staehr, stavn    |
|           21 |      627 | 2024-11-20 | 9 Pandas          | L   | 0.943      | -            | -                | -                | -         |   -20.52 | br0, cadiaN, jabbi, Staehr, stavn    |
|           20 |     1046 | 2024-11-02 | Spirit            | L   | 0.819      | -            | -                | -                | -         |    -0.97 | cadiaN, device, jabbi, Staehr, stavn |
|           19 |     1094 | 2024-10-31 | MOUZ              | W   | 0.804      | 1.000        | 0.644 (0.518)    | 0.500 (0.402)    | 1 (0.804) |    23.24 | cadiaN, device, jabbi, Staehr, stavn |
|           18 |     1116 | 2024-10-30 | Natus Vincere     | W   | 0.797      | 1.000        | 1.000 (0.797)    | 0.525 (0.418)    | 1 (0.797) |    23.66 | cadiaN, device, jabbi, Staehr, stavn |
|           17 |     1508 | 2024-10-09 | Virtus.pro        | L   | 0.659      | -            | -                | -                | -         |    -9.40 | cadiaN, device, jabbi, Staehr, stavn |
|           16 |     1543 | 2024-10-08 | HEROIC            | L   | 0.653      | -            | -                | -                | -         |    -2.31 | cadiaN, device, jabbi, Staehr, stavn |
|           15 |     1567 | 2024-10-07 | Eternal Fire      | W   | 0.646      | 0.624        | 0.360 (0.145)    | 0.349 (0.141)    | 1 (0.646) |    14.75 | cadiaN, device, jabbi, Staehr, stavn |
|           14 |     1957 | 2024-09-26 | Spirit            | L   | 0.573      | -            | -                | -                | -         |    -0.51 | cadiaN, device, jabbi, Staehr, stavn |
|           13 |     2016 | 2024-09-25 | Vitality          | L   | 0.566      | -            | -                | -                | -         |    -0.91 | cadiaN, device, jabbi, Staehr, stavn |
|           12 |     2353 | 2024-09-14 | Complexity        | L   | 0.493      | -            | -                | -                | -         |    -6.63 | br0, device, jabbi, Staehr, stavn    |
|           11 |     2395 | 2024-09-13 | Rooster           | W   | 0.486      | 0.889        | 0.012 (0.005)    | 0.161 (0.069)    | 1 (0.486) |     0.42 | br0, device, jabbi, Staehr, stavn    |
|           10 |     2456 | 2024-09-11 | Complexity        | L   | 0.473      | -            | -                | -                | -         |    -6.75 | br0, device, jabbi, Staehr, stavn    |
|            9 |     2492 | 2024-09-10 | fnatic            | L   | 0.465      | -            | -                | -                | -         |   -10.53 | br0, device, jabbi, Staehr, stavn    |
|            8 |     3462 | 2024-08-12 | G2                | L   | 0.274      | -            | -                | -                | -         |    -0.22 | br0, device, jabbi, Staehr, stavn    |
|            7 |     3496 | 2024-08-11 | Natus Vincere     | L   | 0.266      | -            | -                | -                | -         |    -0.67 | br0, device, jabbi, Staehr, stavn    |
|            6 |     3515 | 2024-08-10 | 9z                | W   | 0.259      | 1.000        | 0.058 (0.015)    | 0.219 (0.057)    | 1 (0.259) |     1.13 | br0, device, jabbi, Staehr, stavn    |
|            5 |     3725 | 2024-08-04 | Ninjas in Pyjamas | W   | 0.219      | 0.581        | 0.077 (0.010)    | 0.276 (0.035)    | 1 (0.219) |     1.73 | br0, device, jabbi, Staehr, stavn    |
|            4 |     3754 | 2024-08-03 | Vitality          | L   | 0.213      | -            | -                | -                | -         |    -0.40 | br0, device, jabbi, Staehr, stavn    |
|            3 |     3795 | 2024-08-02 | Falcons           | W   | 0.205      | 0.581        | 0.092 (0.011)    | 0.198 (0.024)    | 1 (0.205) |     0.96 | br0, device, jabbi, Staehr, stavn    |
|            2 |     3920 | 2024-07-30 | Vitality          | L   | 0.186      | -            | -                | -                | -         |    -0.35 | br0, device, jabbi, Staehr, stavn    |
|            1 |     3948 | 2024-07-29 | Falcons           | W   | 0.180      | 0.581        | 0.092 (0.010)    | 0.198 (0.021)    | 1 (0.180) |     0.83 | br0, device, jabbi, Staehr, stavn    |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($91,042.97)
- Divide that value by the 5th highest value among all rosters ($298,653.52)
- The final value (0.30) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-11-03 |      0.825 | $85,000.00     | $70,090.19      |
| 2024-10-13 |      0.687 | $5,000.00      | $3,435.59       |
| 2024-09-29 |      0.593 | $10,000.00     | $5,930.14       |
| 2024-09-22 |      0.547 | $7,000.00      | $3,829.21       |
| 2024-08-18 |      0.314 | $16,000.00     | $5,017.96       |
| 2024-08-04 |      0.219 | $12,500.00     | $2,739.88       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
