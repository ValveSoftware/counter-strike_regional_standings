### Roster Details<br />
Team Name: Mindfreak<br />
Roster: Crunchy, gump, pain, Texta, tucks<br />
Global Rank: [166](../../standings_global_2025_04_07.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_04_07.md)<br />
Regional Rank: [22]( ../../standings_asia_2025_04_07.md)<br />
<br />
Final Rank Value:  640.6<br />
<br />
Final Rank Value (640.6) = Starting Rank Value (687.3) + Head To Head Adjustments (-46.7)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.339[<sup>1</sup>](#table2)
- Bounty Collected: 0.145[<sup>2</sup>](#table1)
- Opponent Network: 0.007[<sup>2</sup>](#table1)
- LAN Wins: 0.133[<sup>2</sup>](#table1)

The average of these factors is 0.156<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 687.3
- 400 + ( ( 0.156 - 0.000 ) / ( 0.869 - 0.000 ) ) * 1600 = 687.3


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
|           17 |      395 | 2025-03-21 | ex-TALON          | L   | 1.000      | -            | -                | -                | -         |    -6.30 | Crunchy, gump, pain, Texta, tucks |
|           16 |      397 | 2025-03-21 | Vantage           | W   | 1.000      | 0.345        | 0.000 (0.000)    | 0.195 (0.067)    | 1 (1.000) |    11.48 | Crunchy, gump, pain, Texta, tucks |
|           15 |      399 | 2025-03-20 | Housebets         | L   | 1.000      | -            | -                | -                | -         |   -11.99 | Crunchy, gump, pain, Texta, tucks |
|           14 |      874 | 2025-03-03 | Nemiga            | L   | 0.966      | -            | -                | -                | -         |    -5.24 | Crunchy, gump, pain, Texta, tucks |
|           13 |      896 | 2025-03-02 | 3DMAX             | L   | 0.959      | -            | -                | -                | -         |    -0.21 | Crunchy, gump, pain, Texta, tucks |
|           12 |      928 | 2025-03-01 | Eternal Fire      | L   | 0.952      | -            | -                | -                | -         |    -0.04 | Crunchy, gump, pain, Texta, tucks |
|           11 |     1374 | 2025-02-08 | Chinggis Warriors | L   | 0.817      | -            | -                | -                | -         |    -5.59 | gump, pain, Rickeh, Texta, tucks  |
|           10 |     1437 | 2025-02-07 | Believe           | L   | 0.811      | -            | -                | -                | -         |   -18.36 | gump, pain, Rickeh, Texta, tucks  |
|            9 |     2440 | 2024-11-15 | Sangal            | L   | 0.246      | -            | -                | -                | -         |    -3.12 | gump, pain, Rickeh, Texta, tucks  |
|            8 |     2443 | 2024-11-15 | Canada            | W   | 0.246      | 0.617        | 0.000 (0.000)    | 0.013 (0.002)    | 1 (0.246) |     2.03 | gump, pain, Rickeh, Texta, tucks  |
|            7 |     2457 | 2024-11-14 | PCIFIC            | L   | 0.241      | -            | -                | -                | -         |    -3.85 | gump, pain, Rickeh, Texta, tucks  |
|            6 |     2508 | 2024-11-13 | Norway            | L   | 0.233      | -            | -                | -                | -         |    -5.15 | gump, pain, Rickeh, Texta, tucks  |
|            5 |     2513 | 2024-11-13 | Metizport         | L   | 0.233      | -            | -                | -                | -         |    -0.95 | gump, pain, Rickeh, Texta, tucks  |
|            4 |     2999 | 2024-10-20 | FlyQuest          | L   | 0.071      | -            | -                | -                | -         |    -0.43 | gump, pain, Rickeh, Texta, tucks  |
|            3 |     3025 | 2024-10-19 | Housebets         | W   | 0.065      | 0.333        | 0.000 (0.000)    | 0.006 (0.000)    | 0 (0.000) |     0.70 | gump, pain, Rickeh, Texta, tucks  |
|            2 |     3053 | 2024-10-18 | FlyQuest          | L   | 0.058      | -            | -                | -                | -         |    -0.35 | gump, pain, Rickeh, Texta, tucks  |
|            1 |     3080 | 2024-10-17 | Only One Word     | W   | 0.052      | 0.333        | 0.000 (0.000)    | 0.154 (0.003)    | 0 (0.000) |     0.67 | gump, pain, Rickeh, Texta, tucks  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($3,086.87)
- Divide that value by the 5th highest value among all rosters ($274,489.55)
- The final value (0.01) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-03-05 |      0.982 | $3,000.00      | $2,945.04       |
| 2024-10-20 |      0.071 | $2,000.00      | $141.83         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
