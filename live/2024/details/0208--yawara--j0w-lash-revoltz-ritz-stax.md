### Roster Details<br />
Team Name: Yawara<br />
Roster: j0w, lash, revoltz, ritz, stAx<br />
Global Rank: [208](../standings_global_2024_08_14.md)<br />
<br />
Region: [Americas]( ../standings_americas_2024_08_14.md)<br />
Regional Rank: [58]( ../standings_americas_2024_08_14.md)<br />
<br />
Final Rank Value:  487.0<br />
<br />
Final Rank Value (487.0) = Starting Rank Value (509.2) + Head To Head Adjustments (-22.2)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.216[<sup>2</sup>](#table1)
- Opponent Network: 0.006[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.055<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 509.2
- 400 + ( ( 0.055 - 0.000 ) / ( 0.811 - 0.000 ) ) * 1600 = 509.2


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent       | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                          |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           17 |      430 | 2024-08-01 | Bounty Hunters | L   | 1.000      | -            | -                | -                | -         |    -2.73 | j0w, lash, revoltz, ritz, stAx  |
|           16 |      677 | 2024-07-25 | Imperial       | L   | 1.000      | -            | -                | -                | -         |    -0.82 | j0w, lash, revoltz, ritz, stAx  |
|           15 |      722 | 2024-07-24 | W7M            | L   | 1.000      | -            | -                | -                | -         |    -5.10 | j0w, lash, revoltz, ritz, stAx  |
|           14 |      726 | 2024-07-24 | Sharks         | L   | 1.000      | -            | -                | -                | -         |    -2.23 | j0w, lash, revoltz, ritz, stAx  |
|           13 |      807 | 2024-07-21 | Galorys        | L   | 1.000      | -            | -                | -                | -         |    -5.39 | j0w, lash, revoltz, ritz, stAx  |
|           12 |      892 | 2024-07-19 | SPORT          | W   | 1.000      | 0.371        | 0.004 (0.002)    | 0.107 (0.040)    | 0 (0.000) |    22.88 | j0w, lash, revoltz, ritz, stAx  |
|           11 |     1015 | 2024-07-17 | KRÜ            | L   | 1.000      | -            | -                | -                | -         |    -3.46 | j0w, lash, revoltz, ritz, stAx  |
|           10 |     1118 | 2024-07-15 | inSanitY       | L   | 0.999      | -            | -                | -                | -         |    -1.53 | j0w, lash, revoltz, ritz, stAx  |
|            9 |     1964 | 2024-05-31 | 9z Academy     | L   | 0.699      | -            | -                | -                | -         |   -10.51 | j0w, lash, ritz, stAx, Straafer |
|            8 |     2001 | 2024-05-29 | Vikings KR     | L   | 0.688      | -            | -                | -                | -         |    -3.55 | j0w, lash, perez, ritz, stAx    |
|            7 |     2028 | 2024-05-28 | W7M            | L   | 0.681      | -            | -                | -                | -         |    -4.07 | j0w, lash, perez, ritz, stAx    |
|            6 |     2372 | 2024-05-16 | Case           | L   | 0.599      | -            | -                | -                | -         |    -1.98 | j0w, lash, perez, ritz, stAx    |
|            5 |     2501 | 2024-05-13 | Galorys        | L   | 0.580      | -            | -                | -                | -         |    -2.03 | j0w, lash, perez, ritz, stAx    |
|            4 |     2625 | 2024-05-08 | Intense        | L   | 0.545      | -            | -                | -                | -         |    -3.91 | j0w, lash, perez, ritz, stAx    |
|            3 |     2654 | 2024-05-06 | Solid          | L   | 0.534      | -            | -                | -                | -         |    -2.28 | j0w, lash, perez, ritz, stAx    |
|            2 |     3914 | 2024-03-13 | Sharks         | L   | 0.175      | -            | -                | -                | -         |    -0.45 | j0w, lash, leleo, perez, stAx   |
|            1 |     3930 | 2024-03-13 | Case           | W   | 0.173      | 0.143        | 0.030 (0.001)    | 0.768 (0.019)    | 0 (0.000) |     4.93 | j0w, lash, leleo, perez, stAx   |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($320,160.38)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
