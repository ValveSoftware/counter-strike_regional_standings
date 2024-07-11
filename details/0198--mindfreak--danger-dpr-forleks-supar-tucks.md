### Roster Details<br />
Team Name: Mindfreak<br />
Roster: dangeR, dpr, Forleks, supar, tucks<br />
Region: [Asia]( ../standings_asia.md)<br />
<br />
Global Rank: [198](../standings_global.md)<br />
Regional Rank: [26]( ../standings_asia.md)<br />
Final Rank Value:  505.9<br />
<br />
Final Rank Value (505.9) = Starting Rank Value (498.1) + Head To Head Adjustments (7.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.185[<sup>2</sup>](#table1)
- Opponent Network: 0.001[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.047<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 498.1
- 400 + ( ( 0.047 - 0.000 ) / ( 0.759 - 0.000 ) ) * 1600 = 498.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                             |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           15 |     3777 | 2024-01-25 | Rooster      | L   | 0.078      | -            | -                | -                | -         |    -0.36 | dangeR, dpr, Forleks, supar, tucks |
|           14 |     3794 | 2024-01-24 | DXA          | W   | 0.071      | 0.143        | 0.004 (0.000)    | 0.156 (0.002)    | 0 (0.000) |     1.69 | dangeR, dpr, Forleks, supar, tucks |
|           13 |     3814 | 2024-01-23 | FlyQuest     | L   | 0.065      | -            | -                | -                | -         |    -0.02 | dangeR, dpr, Forleks, supar, tucks |
|           12 |     3816 | 2024-01-23 | Rooster      | W   | 0.064      | 0.143        | 0.017 (0.000)    | 0.237 (0.002)    | 0 (0.000) |     1.73 | dangeR, dpr, Forleks, supar, tucks |
|           11 |     3843 | 2024-01-22 | FlyQuest     | L   | 0.058      | -            | -                | -                | -         |    -0.02 | dangeR, dpr, Forleks, supar, tucks |
|           10 |     3844 | 2024-01-22 | Rooster      | W   | 0.057      | 0.143        | 0.017 (0.000)    | 0.237 (0.002)    | 0 (0.000) |     1.55 | dangeR, dpr, Forleks, supar, tucks |
|            9 |     3879 | 2024-01-20 | FlyQuest     | L   | 0.050      | -            | -                | -                | -         |    -0.01 | dangeR, dpr, Forleks, supar, tucks |
|            8 |     3918 | 2024-01-20 | DXA          | W   | 0.044      | 0.143        | 0.000 (0.000)    | 0.002 (0.000)    | 0 (0.000) |     0.51 | dangeR, dpr, Forleks, supar, tucks |
|            7 |     3977 | 2024-01-19 | Rooster      | L   | 0.037      | -            | -                | -                | -         |    -0.17 | dangeR, dpr, Forleks, supar, tucks |
|            6 |     3981 | 2024-01-18 | Vantage      | W   | 0.037      | 0.143        | 0.003 (0.000)    | 0.127 (0.001)    | 0 (0.000) |     0.85 | dangeR, dpr, Forleks, supar, tucks |
|            5 |     4035 | 2024-01-18 | Arcade       | W   | 0.031      | 0.143        | 0.005 (0.000)    | 0.123 (0.001)    | 0 (0.000) |     0.73 | dangeR, dpr, Forleks, supar, tucks |
|            4 |     4038 | 2024-01-17 | Vantage      | W   | 0.030      | 0.143        | 0.003 (0.000)    | 0.127 (0.001)    | 0 (0.000) |     0.71 | dangeR, dpr, Forleks, supar, tucks |
|            3 |     4085 | 2024-01-17 | PatatiPatata | W   | 0.024      | 0.143        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |     0.28 | dangeR, dpr, Forleks, supar, tucks |
|            2 |     4136 | 2024-01-16 | FlyQuest     | L   | 0.017      | -            | -                | -                | -         |    -0.01 | dangeR, dpr, Forleks, supar, tucks |
|            1 |     4165 | 2024-01-15 | KZG          | W   | 0.011      | 0.143        | 0.009 (0.000)    | 0.119 (0.000)    | 0 (0.000) |     0.27 | dangeR, dpr, Forleks, supar, tucks |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($258,358.97)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
