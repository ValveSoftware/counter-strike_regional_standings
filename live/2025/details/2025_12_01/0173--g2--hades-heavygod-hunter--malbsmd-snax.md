### Roster Details<br />
Team Name: G2<br />
Roster: hades, HeavyGod, huNter-, malbsMd, Snax<br />
Global Rank: [173](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [109]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  705.6<br />
<br />
Final Rank Value (705.6) = Starting Rank Value (702.1) + Head To Head Adjustments (3.6)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.296[<sup>1</sup>](#table2)
- Bounty Collected: 0.322[<sup>2</sup>](#table1)
- Opponent Network: 0.005[<sup>2</sup>](#table1)
- LAN Wins: 0.012[<sup>2</sup>](#table1)

The average of these factors is 0.159<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 702.1
- 400 + ( ( 0.159 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 702.1


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent      | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                  |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            5 |     4433 | 2025-06-15 | The MongolZ   | L   | 0.074      | -            | -                | -                | -         |    -0.00 | hades, HeavyGod, huNter-, malbsMd, Snax |
|            4 |     4458 | 2025-06-14 | Natus Vincere | L   | 0.068      | -            | -                | -                | -         |    -0.01 | hades, HeavyGod, huNter-, malbsMd, Snax |
|            3 |     4512 | 2025-06-13 | Aurora        | W   | 0.060      | 1.000        | 1.000 (0.060)    | 0.436 (0.026)    | 1 (0.060) |     1.88 | hades, HeavyGod, huNter-, malbsMd, Snax |
|            2 |     4528 | 2025-06-12 | paiN          | W   | 0.055      | 1.000        | 0.353 (0.019)    | 0.353 (0.019)    | 1 (0.055) |     1.72 | hades, HeavyGod, huNter-, malbsMd, Snax |
|            1 |     4543 | 2025-06-12 | 3DMAX         | L   | 0.053      | -            | -                | -                | -         |    -0.01 | hades, HeavyGod, huNter-, malbsMd, Snax |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($2,424.60)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-06-22 |      0.121 | $20,000.00     | $2,424.60       |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
