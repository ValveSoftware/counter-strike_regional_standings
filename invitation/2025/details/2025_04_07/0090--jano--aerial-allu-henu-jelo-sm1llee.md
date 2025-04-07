### Roster Details<br />
Team Name: JANO<br />
Roster: Aerial, allu, HENU, Jelo, Sm1llee<br />
Global Rank: [90](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_04_07.md)<br />
Regional Rank: [56]( ../../standings_europe_2025_04_07.md)<br />
<br />
Final Rank Value:  778.5<br />
<br />
Final Rank Value (778.5) = Starting Rank Value (777.4) + Head To Head Adjustments (1.0)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.350[<sup>1</sup>](#table2)
- Bounty Collected: 0.251[<sup>2</sup>](#table1)
- Opponent Network: 0.014[<sup>2</sup>](#table1)
- LAN Wins: 0.206[<sup>2</sup>](#table1)

The average of these factors is 0.205<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 777.4
- 400 + ( ( 0.205 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 777.4


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
|            9 |      182 | 2025-03-29 | AMKAL             | L   | 1.000      | -            | -                | -                | -         |   -16.60 | Aerial, allu, HENU, Jelo, Sm1llee |
|            8 |      229 | 2025-03-28 | Ninjas in Pyjamas | L   | 1.000      | -            | -                | -                | -         |   -19.37 | Aerial, allu, HENU, Jelo, Sm1llee |
|            7 |      300 | 2025-03-27 | GTZ               | W   | 1.000      | 0.143        | 0.051 (0.007)    | 0.430 (0.061)    | 0 (0.000) |    17.01 | Aerial, allu, HENU, Jelo, Sm1llee |
|            6 |     1064 | 2025-02-22 | ENCE Academy      | W   | 0.907      | 0.304        | 0.006 (0.002)    | 0.117 (0.032)    | 1 (0.907) |    10.41 | Aerial, allu, HENU, Jelo, Sm1llee |
|            5 |     1079 | 2025-02-21 | ex-Heimo          | W   | 0.901      | 0.304        | 0.004 (0.001)    | 0.136 (0.037)    | 1 (0.901) |     8.51 | Aerial, allu, HENU, Jelo, Sm1llee |
|            4 |     2994 | 2024-10-20 | ENCE Academy      | W   | 0.072      | 0.303        | 0.006 (0.000)    | 0.117 (0.003)    | 1 (0.072) |     0.89 | Aerial, allu, HENU, juho, xseveN  |
|            3 |     3046 | 2024-10-18 | B8                | L   | 0.060      | -            | -                | -                | -         |    -0.47 | Aerial, allu, HENU, juho, xseveN  |
|            2 |     3093 | 2024-10-16 | Ninjas in Pyjamas | W   | 0.048      | 0.589        | 0.011 (0.000)    | 0.075 (0.002)    | 1 (0.048) |     0.66 | Aerial, allu, HENU, juho, xseveN  |
|            1 |     3109 | 2024-10-16 | The MongolZ       | L   | 0.045      | -            | -                | -                | -         |    -0.00 | Aerial, allu, HENU, juho, xseveN  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,791.42)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-02-22 |      0.907 | $3,097.00      | $2,808.72       |
| 2024-10-20 |      0.074 | $10,000.00     | $742.05         |
| 2024-10-20 |      0.072 | $3,320.00      | $240.65         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
