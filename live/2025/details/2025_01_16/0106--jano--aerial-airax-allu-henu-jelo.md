### Roster Details<br />
Team Name: JANO<br />
Roster: Aerial, Airax, allu, HENU, Jelo<br />
Global Rank: [106](../../standings_global_2025_01_16.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_01_16.md)<br />
Regional Rank: [77]( ../../standings_europe_2025_01_16.md)<br />
<br />
Final Rank Value:  849.8<br />
<br />
Final Rank Value (849.8) = Starting Rank Value (840.6) + Head To Head Adjustments (9.1)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.409[<sup>1</sup>](#table2)
- Bounty Collected: 0.288[<sup>2</sup>](#table1)
- Opponent Network: 0.027[<sup>2</sup>](#table1)
- LAN Wins: 0.165[<sup>2</sup>](#table1)

The average of these factors is 0.222<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 840.6
- 400 + ( ( 0.222 - 0.000 ) / ( 0.807 - 0.000 ) ) * 1600 = 840.6


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent          | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                           |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |       23 | 2025-01-15 | FLuffy Gangsters  | W   | 1.000      | 0.143        | 0.015 (0.002)    | 0.587 (0.084)    | 0 (0.000) |    10.61 | Aerial, Airax, allu, HENU, Jelo  |
|           14 |       35 | 2025-01-14 | ALASKA            | L   | 1.000      | -            | -                | -                | -         |   -13.49 | Aerial, Airax, allu, HENU, Jelo  |
|           13 |     1362 | 2024-10-20 | ENCE Academy      | W   | 0.610      | 0.303        | 0.014 (0.003)    | 0.284 (0.053)    | 1 (0.610) |     8.05 | Aerial, allu, HENU, juho, xseveN |
|           12 |     1414 | 2024-10-18 | B8                | L   | 0.598      | -            | -                | -                | -         |    -2.69 | Aerial, allu, HENU, juho, xseveN |
|           11 |     1461 | 2024-10-16 | Ninjas in Pyjamas | W   | 0.586      | 0.589        | 0.079 (0.027)    | 0.250 (0.086)    | 1 (0.586) |    14.64 | Aerial, allu, HENU, juho, xseveN |
|           10 |     1477 | 2024-10-16 | The MongolZ       | L   | 0.583      | -            | -                | -                | -         |    -0.07 | Aerial, allu, HENU, juho, xseveN |
|            9 |     1669 | 2024-10-06 | Heimo             | W   | 0.519      | 0.143        | 0.006 (0.000)    | 0.204 (0.015)    | 0 (0.000) |     5.99 | Aerial, allu, HENU, juho, xseveN |
|            8 |     1677 | 2024-10-06 | ENCE Academy      | L   | 0.518      | -            | -                | -                | -         |    -9.28 | Aerial, allu, HENU, juho, xseveN |
|            7 |     1712 | 2024-10-05 | cspojat           | W   | 0.511      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     1.29 | Aerial, allu, HENU, juho, xseveN |
|            6 |     2615 | 2024-09-08 | Aurora Young Blud | L   | 0.331      | -            | -                | -                | -         |    -3.79 | Aerial, allu, HENU, juho, xseveN |
|            5 |     2666 | 2024-09-06 | Revenant          | L   | 0.319      | -            | -                | -                | -         |    -6.13 | Aerial, allu, HENU, juho, xseveN |
|            4 |     2756 | 2024-09-04 | Rhyno             | W   | 0.303      | 0.435        | 0.008 (0.001)    | 0.211 (0.028)    | 0 (0.000) |     3.75 | Aerial, allu, HENU, juho, xseveN |
|            3 |     2792 | 2024-09-03 | GUN5              | L   | 0.296      | -            | -                | -                | -         |    -1.82 | Aerial, allu, HENU, juho, xseveN |
|            2 |     3845 | 2024-08-03 | ENCE Academy      | W   | 0.091      | 0.143        | 0.014 (0.000)    | 0.284 (0.004)    | 1 (0.091) |     1.23 | Aerial, allu, HENU, juho, xseveN |
|            1 |     3907 | 2024-08-01 | Heimo             | W   | 0.079      | 0.143        | 0.006 (0.000)    | 0.204 (0.002)    | 1 (0.079) |     0.86 | Aerial, allu, HENU, juho, xseveN |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($8,148.26)
- Divide that value by the 5th highest value among all rosters ($227,813.60)
- The final value (0.04) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2024-10-20 |      0.612 | $10,000.00     | $6,121.60       |
| 2024-10-20 |      0.610 | $3,320.00      | $2,026.66       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
