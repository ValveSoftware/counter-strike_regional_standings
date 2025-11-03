### Roster Details<br />
Team Name: FURY<br />
Roster: ADK, cheeseball, cookie, rekonz, SkulL<br />
Global Rank: [239](../../standings_global_2025_11_03.md)<br />
<br />
Region: [Asia]( ../../standings_asia_2025_11_03.md)<br />
Regional Rank: [31]( ../../standings_asia_2025_11_03.md)<br />
<br />
Final Rank Value:  508.6<br />
<br />
Final Rank Value (508.6) = Starting Rank Value (495.0) + Head To Head Adjustments (13.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.000[<sup>1</sup>](#table2)
- Bounty Collected: 0.192[<sup>2</sup>](#table1)
- Opponent Network: 0.011[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.051<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 495.0
- 400 + ( ( 0.051 - 0.000 ) / ( 0.853 - 0.000 ) ) * 1600 = 495.0


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent        | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                         |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|           14 |      370 | 2025-10-14 | Rooster         | L   | 1.000      | -            | -                | -                | -         |    -6.93 | ADK, cheeseball, cookie, rekonz, SkulL         |
|           13 |      617 | 2025-10-07 | Animus Victoria | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.120 (0.033)    | 0 (0.000) |    16.05 | ADK, cheeseball, cookie, rekonz, SkulL         |
|           12 |      680 | 2025-10-06 | LE-LUX          | W   | 1.000      | 0.278        | 0.000 (0.000)    | 0.000 (0.000)    | 0 (0.000) |    10.10 | ADK, cheeseball, cookie, rekonz, SkulL         |
|           11 |      738 | 2025-10-05 | Ground Zero     | L   | 1.000      | -            | -                | -                | -         |    -8.38 | cheeseball, cookie, rahley, rekonz, SkulL      |
|           10 |     1678 | 2025-09-10 | Ground Zero     | L   | 0.838      | -            | -                | -                | -         |    -8.13 | ADK, cheeseball, cookie, rekonz, SkulL         |
|            9 |     1681 | 2025-09-10 | KZG             | L   | 0.838      | -            | -                | -                | -         |   -10.08 | cheeseball, cookie, rahley, rekonz, SkulL      |
|            8 |     1733 | 2025-09-09 | Rooster         | L   | 0.832      | -            | -                | -                | -         |    -6.63 | cheeseball, cookie, rahley, rekonz, SkulL      |
|            7 |     1837 | 2025-09-06 | Rooster         | L   | 0.811      | -            | -                | -                | -         |    -6.58 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            6 |     1878 | 2025-09-03 | The Art of War  | W   | 0.793      | 0.314        | 0.000 (0.000)    | 0.032 (0.008)    | 0 (0.000) |     8.57 | ADK, cheeseball, cookie, rekonz, SkulL         |
|            5 |     1886 | 2025-09-02 | Underground     | W   | 0.785      | 0.314        | 0.001 (0.000)    | 0.115 (0.028)    | 0 (0.000) |    15.76 | ADK, cheeseball, cookie, rekonz, SkulL         |
|            4 |     3050 | 2025-07-14 | SemperFi        | L   | 0.452      | -            | -                | -                | -         |    -3.14 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            3 |     3095 | 2025-07-12 | Ground Zero     | L   | 0.438      | -            | -                | -                | -         |    -4.31 | cheeseball, cookie, rekonz, SkulL, Winnieeeee  |
|            2 |     3180 | 2025-07-09 | Underground     | W   | 0.419      | 0.314        | 0.001 (0.000)    | 0.115 (0.015)    | 0 (0.000) |     8.83 | cheeseball, cookie, rahley, SkulL, Winnieeeee  |
|            1 |     3199 | 2025-07-08 | KZG             | W   | 0.411      | 0.314        | 0.001 (0.000)    | 0.200 (0.026)    | 0 (0.000) |     8.48 | cheeseball, cookie, rahley, rekonz, Winnieeeee |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($0.00)
- Divide that value by the 5th highest value among all rosters ($619,318.60)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
