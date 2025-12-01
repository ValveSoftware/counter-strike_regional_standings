### Roster Details<br />
Team Name: ROSY<br />
Roster: 1nhuman, bogemt, byek, forzetsky<br />
Global Rank: [255](../../standings_global_2025_12_01.md)<br />
<br />
Region: [Europe]( ../../standings_europe_2025_12_01.md)<br />
Regional Rank: [145]( ../../standings_europe_2025_12_01.md)<br />
<br />
Final Rank Value:  520.6<br />
<br />
Final Rank Value (520.6) = Starting Rank Value (523.5) + Head To Head Adjustments (-2.9)<br />

#### Starting Rank Value<br />
To figure out a rosters's Starting Rank Value, first take the average of these four factors:<br />
- Bounty Offered: 0.258[<sup>1</sup>](#table2)
- Bounty Collected: 0.000[<sup>2</sup>](#table1)
- Opponent Network: 0.002[<sup>2</sup>](#table1)
- LAN Wins: 0.000[<sup>2</sup>](#table1)

The average of these factors is 0.065<br />
<br />
Next, take the maximum and minimum average across all teams and compute the following:<br />
- 400 + ( ( Roster_Average - Min_Average ) / ( Max_Average - Min_Average ) ) * 1600 = 523.5
- 400 + ( ( 0.065 - 0.000 ) / ( 0.841 - 0.000 ) ) * 1600 = 523.5


#### Factors<br />
Below you can see a table of all of the matches that contributed to this roster's Final Rank Value.<br />
Note:<br />

- For Bounty Collected, Opponent Network, and LAN Wins, we consider only the ten best results over the past 6 months.
- Raw values for those factors are multiplied by Age Weight. Bounty and Opponent Network values are also multiplied by Event Weight. The adjusted value is shown in parenthesis.
- The final value for a factor is the total of its adjusted values divided by 10. Bounty Collected is further scaled by the curve function[<sup>3</sup>](#curveFunction)
- Head to head adjustments are based on rosters' starting rank values. The results shown below are adjusted by Age Weight and not Event Weight
<span id="table1"></span><br />


| Match Played | Match ID | Date       | Opponent     | W/L | Age Weight | Event Weight | Bounty Collected | Opponent Network | LAN Wins  | H2H Adj. | Roster                                   |
| -: | -: | :- | :- | :- | :- | :- | :- | :- | :- | -: | :- |
|            6 |     4235 | 2025-07-06 | FORZE Reload | L   | 0.212      | -            | -                | -                | -         |    -2.16 | 1nhuman, bogemt, byek, forzetsky, whsup  |
|            5 |     4251 | 2025-07-03 | AaB          | L   | 0.192      | -            | -                | -                | -         |    -3.35 | 1nhuman, bogemt, byek, forzetsky, whsup  |
|            4 |     4269 | 2025-07-01 | ALGO         | W   | 0.178      | 0.486        | 0.000 (0.000)    | 0.182 (0.016)    | 0 (0.000) |     3.08 | 1nhuman, bogemt, byek, forzetsky, whsup  |
|            3 |     4419 | 2025-06-16 | RUBY         | L   | 0.080      | -            | -                | -                | -         |    -0.16 | 1nhuman, bogemt, byek, forzetsky, spira  |
|            2 |     4477 | 2025-06-14 | TPuDCATb TPu | L   | 0.066      | -            | -                | -                | -         |    -0.11 | 1nhuman, byek, emot1on, forzetsky, spira |
|            1 |     4542 | 2025-06-12 | ENCE Academy | L   | 0.053      | -            | -                | -                | -         |    -0.21 | 1nhuman, bogemt, byek, forzetsky, spira  |

<br />
<span id="table2"></span><br />
To calculate a roster's Bounty Offered:<br />

- First, take the sum of their top 10 scaled winnings ($764.70)
- Divide that value by the 5th highest value among all rosters ($574,782.45)
- The final value (0.00) is scaled by the curve function.[<sup>3</sup>](#curveFunction)

Top ten winnings for this roster:<br />

| Event Date | Age Weight | Prize Winnings | Scaled Winnings |
| :- | -: | :- | :- |
| 2025-07-13 |      0.261 | $2,930.00      | $764.70         |


<span id="curveFunction"></span>_The Curve Function: 1 / ( 1 + abs( log10( x ) ) )_<br />

---
_Event data for Regional Standings provided by HLTV.org_<br />
